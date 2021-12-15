function parseInput(input: string) {
  return input.split(/\n/).map(row => row.split('').map(Number));
}

type Coords = [number, number];
const getKey = ([x, y]: Coords) => `${x},${y}`;

// This proved to be very difficult for me to attempt from scratch.
// After much time on my own, I browsed algorithms and solutions for this challenge.
// The solution that actually worked came from:
// https://github.com/tymscar/Advent-Of-Code/blob/master/2021/javascript/day15/part1.js
// I simply cleaned it up for TypeScript, added comments, added some helper functions,
// and did very slight refactoring in how the tracking arrays/records worked.
function getLowestRiskValue(grid: number[][]) {
  const width = grid[0].length;
  const height = grid.length;
  const maxX = width - 1;
  const maxY = height - 1;

  // Keep track of the parent/prev position for the given coordinate.
  const parent: Record<string, Coords> = {};

  // Start at the top left of the board, end at the bottom right.
  const start: Coords = [0, 0];
  const end = [maxX, maxY];

  // Initialize our scoreboard and visited arrays.
  const scoreBoard = Array.from({ length: height }).map(() =>
    Array.from({ length: width }).map(() => Infinity),
  );
  const visited: boolean[][] = Array.from({ length: height }).map(() =>
    Array.from({ length: width }).map(() => false),
  );

  // HELPER FUNCTIONS.
  const getNeighbors = ([x, y]: Coords) => {
    const arr: Coords[] = [];
    if (x > 0) {
      arr.push([x - 1, y]);
    }
    if (x < maxX) {
      arr.push([x + 1, y]);
    }
    if (y > 0) {
      arr.push([x, y - 1]);
    }
    if (y < maxY) {
      arr.push([x, y + 1]);
    }
    return arr;
  };
  function getGridValue(coords: Coords): number {
    return grid[coords[1]][coords[0]];
  }
  function getScore(coords: Coords): number {
    return scoreBoard[coords[1]][coords[0]];
  }
  function setScore(coords: Coords, value: number): void {
    scoreBoard[coords[1]][coords[0]] = value;
  }
  function getVisited(coords: Coords): boolean {
    return visited[coords[1]][coords[0]];
  }
  function setVisited(coords: Coords, value: boolean): void {
    visited[coords[1]][coords[0]] = value;
  }

  // Mark the starting position on the scoreboard and visited arrays.
  setScore(start, 0);
  setVisited(start, true);

  // Initialize our queue with the starting position.
  let queue = [start];
  while (queue.length > 0) {
    // From the queue, get the position with the lowest score.
    let curr = queue[0];
    for (let i = 0; i < queue.length; i++) {
      if (getScore(queue[i]) < getScore(curr)) {
        curr = queue[i];
      }
    }

    // Filter out current element from the queue.
    queue = queue.filter(a => a[0] !== curr[0] || a[1] !== curr[1]);

    // If we've reached the end, then calculate the risk and return it.
    if (curr[0] === end[0] && curr[1] === end[1]) {
      let risk = 0;
      // Traverse back up the tree from the current (end) position via parent dictionary.
      let loc = curr;
      while (parent[getKey(loc)]) {
        risk += getGridValue(loc);
        loc = parent[getKey(loc)];
      }
      return risk;
    }

    // Iterate through each adjacent neighbor position.
    getNeighbors(curr).forEach(pos => {
      // If we have yet to visit this position, do so if appropriate.
      if (getVisited(pos) === false) {
        const possibleCost = getGridValue(pos) + getScore(curr);
        if (possibleCost < getScore(pos)) {
          setScore(pos, possibleCost);
          parent[getKey(pos)] = curr;
        }
        setVisited(pos, true);
        queue.push(pos);
      }
    });
  }
}

function partOne(input: string) {
  const grid = parseInput(input);
  return getLowestRiskValue(grid);
}

const SIZE_FACTOR = 5;
function partTwo(input: string) {
  const grid = parseInput(input);
  const originalWidth = grid[0].length;
  const originalHeight = grid.length;
  const width = originalWidth * SIZE_FACTOR;
  const height = originalHeight * SIZE_FACTOR;

  // Generate a new grid that is actually SIZE_FACTOR times larger than the original grid.
  // There is most definitely a more elegant solution we can do inside of getLowestRiskValue
  // using the original grid, but this brute force approach with a gigantic grid array worked out,
  // albeit slowly.
  const newGrid = Array.from({ length: height }).map((_, y) =>
    Array.from({ length: width }).map((_, x) => {
      // Get the original value.
      const val = grid[y % originalHeight][x % originalWidth];
      // For every 1 grid size away from the original grid, we want to add 1 to the original value.
      const ny = Math.floor(y / originalHeight);
      const nx = Math.floor(x / originalWidth);
      const newVal = val + ny + nx;
      // Keep the value within the 1-9 range.
      return newVal % 9 || newVal;
    }),
  );

  return getLowestRiskValue(newGrid);
}

export { partOne, partTwo };
