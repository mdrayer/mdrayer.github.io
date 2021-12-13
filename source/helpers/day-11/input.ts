const DAY_11_TEST_STR_MINI = `11111
19991
19191
19991
11111`;
const DAY_11_TEST_STR = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;
function parseInput(input: string): number[][] {
  return input.split(/\n/).map(c => c.split('').map(n => Number(n)));
}

export { DAY_11_TEST_STR, DAY_11_TEST_STR_MINI, parseInput };
