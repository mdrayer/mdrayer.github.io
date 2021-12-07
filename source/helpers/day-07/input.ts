const TEST_STR = '16,1,2,0,4,2,7,1,2,14';
function parseInput(input: string): number[] {
  return input.split(',').map(Number);
}
const DAY_7_TEST_ARR = parseInput(TEST_STR);

export { parseInput, DAY_7_TEST_ARR };
