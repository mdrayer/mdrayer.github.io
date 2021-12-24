import { DAY_19_TEST_STR } from './input';

type Coords = [number, number, number];

type Scanner<T extends number[]> = {
  id: number;
  beacons: T[];
};

interface ScannerInfo {
  beacons: Coords[];
  scannerId: number;
  parentId: number;
  position: Coords;
  oFnc: OrientationFunc;
}

function parseInput<T extends number[]>(input: string): Array<Scanner<T>> {
  return input.split(/\n\n/).map((a, i) => {
    return {
      id: i,
      beacons: a
        .split(/\n/)
        .filter((_, i) => i !== 0)
        .map(b => b.split(',').map(Number) as T),
    };
  });
}

function partOne(input = DAY_19_TEST_STR) {
  const scanners = parseInput<Coords>(input);

  // const scanners2d = parseInput<[number, number]>(twoD);
  // const location = compareScanners2D(scanners2d[0], scanners2d[1], 3);
  // console.log(location);

  const fullInfo: ScannerInfo[] = [];

  // Compare scanners.
  for (const scannerOne of scanners) {
    for (const scannerTwo of scanners) {
      // Do not compare the same scanners.
      if (scannerOne.id === scannerTwo.id) {
        continue;
      }
      // No need to get info for the base scanner.
      if (scannerTwo.id === 0) {
        continue;
      }
      const loc = compareScanners(scannerOne, scannerTwo, 12);
      if (loc) {
        fullInfo.push({
          scannerId: scannerTwo.id,
          parentId: scannerOne.id,
          ...loc,
        });
      }
    }
  }

  const info: ScannerInfo[] = [];

  fullInfo.forEach(f => {
    // Add unique scanner ID items.
    if (!info.some(a => a.scannerId === f.scannerId)) {
      info.push(f);
    }
  });

  fullInfo.forEach(f => {
    // Add additional unique pair items.
    if (
      !info.some(
        a => a.scannerId === f.scannerId && a.parentId === f.parentId,
      ) &&
      !info.some(a => a.parentId === f.scannerId && a.scannerId === f.parentId)
    ) {
      info.push(f);
    }
  });

  const scanner0: ScannerInfo = {
    scannerId: scanners[0].id,
    parentId: 0,
    position: [0, 0, 0],
    oFnc: orientations[0],
    beacons: scanners[0].beacons,
  };
  const dictionary = getScannerLocations(scanner0, info);

  const beacons: Coords[] = [];

  Object.values(dictionary).forEach(a => {
    beacons.push(...a.beacons);
  });

  // Create new set of beacon strings (since arrays are not considered unique within a set).
  const beaconSet = new Set(beacons.map(String));

  return beaconSet.size;
}

type ScannerDictionary = Record<
  number,
  {
    scannerId: number;
    /** Position relative to the base scanner. */
    position: Coords;
    /** List of beacons relative to the base scanner. */
    beacons: Coords[];
  }
>;
function getScannerLocations(base: ScannerInfo, arr: ScannerInfo[]) {
  // Initialize our dictionary and add the base record.
  const d: ScannerDictionary = {};
  d[base.scannerId] = {
    scannerId: base.scannerId,
    position: base.position,
    beacons: base.beacons,
  };

  arr.forEach(scanner => {
    if (!d[scanner.scannerId]) {
      let parent =
        scanner.parentId === base.scannerId
          ? base
          : arr.find(b => b.scannerId === scanner.parentId);

      if (!parent) {
        throw new Error(`No parent found for id ${scanner.parentId}.`);
      }

      const position = getLocation(parent, scanner.position);
      const beacons = scanner.beacons.map(b =>
        getLocation(parent as ScannerInfo, b),
      );

      let item = {
        scannerId: scanner.scannerId,
        position: position,
        beacons,
      };

      while (parent && parent.scannerId !== base.scannerId) {
        parent = parent
          ? arr.find(b => b.scannerId === parent?.parentId)
          : undefined;
        if (parent) {
          const newPos = getLocation(parent, item.position);
          const newBeacons = item.beacons.map(b =>
            getLocation(parent as ScannerInfo, b),
          );
          item = {
            ...item,
            position: newPos,
            beacons: newBeacons,
          };
        }
      }

      d[scanner.scannerId] = item;
    }
  });

  return d;
}

function getLocation(a: ScannerInfo, b: Coords): Coords {
  return a.oFnc(b).map((bb, i) => a.position[i] + bb) as Coords;
}

function compareScanners(
  arrA: Scanner<Coords>,
  arrB: Scanner<Coords>,
  overlapping: number,
) {
  for (const a of arrA.beacons) {
    // Iterate through each orientation function to see which one works.
    for (const oFnc of orientations) {
      // Get newly oriented coords for array B.
      const oCoords = arrB.beacons.map(oFnc);
      for (const b of oCoords) {
        const position = a.map((aa, i) => aa - b[i]) as Coords;
        const beacons = oCoords.map(
          bb => bb.map((bbb, i) => bbb + position[i]) as Coords,
        );
        const matches = beacons.filter(bb =>
          arrA.beacons.some(aa => arrIsEqual(aa, bb)),
        );
        if (matches.length >= overlapping) {
          // Match found.
          return {
            position,
            beacons,
            oFnc,
            matches,
          };
        }
      }
    }
  }
}

type OrientationFunc = (a: Coords) => Coords;
// All 24 possible rotional based orientations.
const orientations: OrientationFunc[] = [
  ([a, b, c]) => [a, b, c],
  ([a, b, c]) => [a, c, -b],
  ([a, b, c]) => [a, -b, -c],
  ([a, b, c]) => [a, -c, b],
  ([a, b, c]) => [b, a, -c],
  ([a, b, c]) => [b, c, a],
  ([a, b, c]) => [b, -a, c],
  ([a, b, c]) => [b, -c, -a],
  ([a, b, c]) => [c, a, b],
  ([a, b, c]) => [c, b, -a],
  ([a, b, c]) => [c, -a, -b],
  ([a, b, c]) => [c, -b, a],
  ([a, b, c]) => [-a, b, -c],
  ([a, b, c]) => [-a, c, b],
  ([a, b, c]) => [-a, -b, c],
  ([a, b, c]) => [-a, -c, -b],
  ([a, b, c]) => [-b, a, c],
  ([a, b, c]) => [-b, c, -a],
  ([a, b, c]) => [-b, -a, -c],
  ([a, b, c]) => [-b, -c, a],
  ([a, b, c]) => [-c, a, -b],
  ([a, b, c]) => [-c, b, a],
  ([a, b, c]) => [-c, -a, b],
  ([a, b, c]) => [-c, -b, -a],
];

function arrIsEqual<T>(a: T[], b: T[]): boolean {
  return a.every((aa, i) => aa === b[i]);
}

export { partOne };
