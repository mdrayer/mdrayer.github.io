const TEST_STR = `199
200
208
210
200
207
240
269
260
263`;

function parseInput(input: string): number[] {
  return input.split(/\n/).map(Number);
}

// const INPUT_ARR = INPUT_STR.split(',').map(Number);
const TEST_ARR = parseInput(TEST_STR);

export { parseInput, TEST_ARR, TEST_STR };
