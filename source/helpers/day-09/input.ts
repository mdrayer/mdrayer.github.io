const DAY_9_TEST_STR = `2199943210
3987894921
9856789892
8767896789
9899965678`;
function parseInput(input: string): number[][] {
  return input.split(/\n/).map(row => row.split('').map(Number));
}

export { DAY_9_TEST_STR, parseInput };
