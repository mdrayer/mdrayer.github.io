const DAY_12_TEST_STR = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;
const DAY_12_STR = `xx-end
EG-xx
iy-FP
iy-qc
AB-end
yi-KG
KG-xx
start-LS
qe-FP
qc-AB
yi-start
AB-iy
FP-start
iy-LS
yi-LS
xx-AB
end-KG
iy-KG
qc-KG
FP-xx
LS-qc
FP-yi`;
type Path = [string, string];
const START = 'start';
const END = 'end';
function parseInput(input: string): Path[] {
  return input.split(/\n/).map(a => a.split('-')) as Path[];
}

/*
Your goal is to find the number of distinct paths that start at start, end at end,
and don't visit small caves more than once. There are two types of caves:
  - big caves (written in uppercase, like A) and
  - small caves (written in lowercase, like b).
It would be a waste of time to visit any small cave more than once, but big caves
are large enough that it might be worth visiting them multiple times. So, all paths
you find should visit small caves at most once, and can visit big caves any number of times.
*/
function getPaths(input: string, canVisitTwice = false) {
  const parsed = parseInput(input);
  const startArr = parsed.filter(p => p.includes(START));
  const restArr = parsed.filter(p => !p.includes(START));
  let pathCount = 0;

  function goNext(
    path: Path,
    start: string,
    smallCavesVisited: string[],
    smallCaveTwice: string | null,
    availablePaths: Path[],
    currentPath: string[],
  ) {
    // Get the next destination.
    const next = path.filter(p => p !== start)[0];
    const currPath = currentPath.concat(next);
    if (next === END) {
      // End found.
      pathCount++;
      return;
    }
    // Filter out paths that include small caves we've already visited.
    const nextAvailPaths = availablePaths.filter(p =>
      canVisit(p, smallCavesVisited, smallCaveTwice, canVisitTwice),
    );
    // Get list of possible next paths.
    const nextArr = nextAvailPaths.filter(a => a.includes(next));
    const smallArr = [...smallCavesVisited];
    if (next === next.toLowerCase()) {
      if (smallArr.includes(next) && !smallCaveTwice) {
        smallCaveTwice = next;
      }
      smallArr.push(next);
    }
    nextArr.forEach(nextPath => {
      goNext(
        nextPath,
        next,
        smallArr,
        smallCaveTwice,
        nextAvailPaths,
        currPath,
      );
    });
  }

  startArr.forEach(p => {
    goNext(p, START, [], null, restArr, [START]);
  });

  return pathCount;
}

function canVisit(
  path: Path,
  small: string[],
  smallTwice: string | null,
  canVisitTwice: boolean,
): boolean {
  // If smallTwice is not yet defined, we can keep visiting small caves;
  if (canVisitTwice && !smallTwice) {
    return true;
  }
  return !path.some(a => small.includes(a));
}

export { DAY_12_STR, DAY_12_TEST_STR, getPaths };
