const MIN_LEVEL = 0;
const MAX_LEVEL = 9;

const RANGE = [-1, 0, 1];

const STEPS = 1000;
const MAX_STEP_PART_1 = 100;

function flash(rowIndex: number, colIndex: number, arr: number[][]) {
  // Item causes a flash. Increase energy levels of all adjacent items by 1.
  RANGE.forEach(j => {
    RANGE.forEach(k => {
      if (j === 0 && k === 0) {
        // Don't do anything to self.
        return;
      }
      const rowToUpdate = rowIndex + j;
      const colToUpdate = colIndex + k;
      if (
        rowToUpdate > -1 &&
        rowToUpdate < arr.length &&
        colToUpdate > -1 &&
        colToUpdate < arr[0].length
      ) {
        arr[rowToUpdate][colToUpdate] += 1;
      }
    });
  });
}

interface Day11Info {
  totalFlashes: number;
  firstStepAllFlash: number | undefined;
}
function getInfo(input: number[][]): Day11Info {
  let table = input.slice();
  let flashes = 0;
  let first: number | undefined;

  // During a single step, the following occurs:
  for (let step = 1; step <= STEPS; step++) {
    // First, the energy level of each octopus increases by 1.
    const newTable = table.map(row => row.map(n => n + 1));
    /*
      Then, any octopus with an energy level greater than 9 flashes.
      This increases the energy level of all adjacent octopuses by 1,
      including octopuses that are diagonally adjacent. If this causes
      an octopus to have an energy level greater than 9, it also flashes.
      This process continues as long as new octopuses keep having their
      energy level increased beyond 9.
      (An octopus can only flash at most once per step.)
    */
    const hasFlashed: string[] = [];
    let hasFlashes = newTable.some(row => row.some(n => n > MAX_LEVEL));
    while (hasFlashes) {
      newTable.forEach((row, rowIndex) => {
        row.forEach((item, colIndex) => {
          if (
            item > MAX_LEVEL &&
            !hasFlashed.includes(`${rowIndex},${colIndex}`)
          ) {
            if (step <= MAX_STEP_PART_1) {
              flashes++;
            }
            flash(rowIndex, colIndex, newTable);
            hasFlashed.push(`${rowIndex},${colIndex}`);
          }
        });
      });
      hasFlashes = newTable.some((row, ri) =>
        row.some(
          (n, ci) => n > MAX_LEVEL && !hasFlashed.includes(`${ri},${ci}`),
        ),
      );
    }

    // Finally, any octopus that flashed during this step has its energy level set to 0,
    // as it used all of its energy to flash.
    table = newTable.map(row => row.map(n => (n > MAX_LEVEL ? MIN_LEVEL : n)));

    if (table.every(row => row.every(n => n === MIN_LEVEL))) {
      if (typeof first === 'undefined') {
        return {
          totalFlashes: flashes,
          firstStepAllFlash: step,
        };
      }
    }
  }
  return {
    totalFlashes: flashes,
    firstStepAllFlash: first,
  };
}

export { getInfo };
