// PART ONE: LOW POINTS
function isLowPoint(
  rowIndex: number,
  colIndex: number,
  arr: number[][],
): boolean {
  const item = arr[rowIndex][colIndex];
  // Get the items that are above, below, left and right of current item.
  const aboveNum = rowIndex > 0 ? arr[rowIndex - 1][colIndex] : 10;
  const belowNum = rowIndex < arr.length - 1 ? arr[rowIndex + 1][colIndex] : 10;
  const leftNum = colIndex > 0 ? arr[rowIndex][colIndex - 1] : 10;
  const rightNum =
    colIndex < arr[rowIndex].length - 1 ? arr[rowIndex][colIndex + 1] : 10;

  return (
    item < aboveNum && item < belowNum && item < leftNum && item < rightNum
  );
}

interface LowPoint {
  value: number;
  coords: [number, number];
}
function getLowPoints(arr: number[][]): LowPoint[] {
  const points: LowPoint[] = [];
  arr.forEach((row, rowIndex) => {
    row.forEach((item, colIndex) => {
      if (isLowPoint(rowIndex, colIndex, arr)) {
        points.push({ value: item, coords: [rowIndex, colIndex] });
      }
    });
  });
  return points;
}

function getSum(arr: number[][]): number {
  return getLowPoints(arr).reduce<number>((prev, curr) => {
    // Add risk level to sum.
    // The risk level of a low point is 1 plus its height.
    return prev + (curr.value + 1);
  }, 0);
}

// PART TWO: BASINS
function getBasins(arr: number[][]) {
  const rowSize = arr.length;
  const colSize = arr[0].length;
  /*
    A basin is all locations that eventually flow downward to a single low point.
    Therefore, every low point has a basin, although some basins are very small.
    Locations of height 9 do not count as being in any basin,
    and all other locations will always be part of exactly one basin.
  */
  const basins = getLowPoints(arr).map(lowPoint => {
    const basinArr: Array<[number, number]> = [];
    let newPoints: Array<[number, number]> = [lowPoint.coords];

    let keepGoing = true;
    function checkAndAdd(coords: [number, number]) {
      const val = arr[coords[0]][coords[1]];
      if (
        val !== 9 &&
        !basinArr.some(b => b[0] === coords[0] && b[1] === coords[1]) &&
        !newPoints.some(b => b[0] === coords[0] && b[1] === coords[1])
      ) {
        newPoints.push(coords);
      }
    }
    while (keepGoing) {
      // TODO: Iterate on the new points arr rather than the basin arr.
      basinArr.forEach(([row, col]) => {
        // Gather points vertically and horizontally around current position that are not 9.
        if (row > 0) {
          // Check and add position above.
          checkAndAdd([row - 1, col]);
        }

        if (row < rowSize - 1) {
          // Check and add position below.
          checkAndAdd([row + 1, col]);
        }

        if (col > 0) {
          // Check and add position to the left.
          checkAndAdd([row, col - 1]);
        }

        if (col < colSize - 1) {
          // Check and add position to the right.
          checkAndAdd([row, col + 1]);
        }
      });

      if (newPoints.length === 0) {
        keepGoing = false;
      } else {
        basinArr.push(...newPoints);
        newPoints = [];
      }
    }

    return basinArr;
  });

  return (
    basins
      // Get highest three basin sizes and multiply them together.
      .map(b => b.length)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((prev, curr) => prev * curr, 1)
  );
}

export { getBasins, getSum };
