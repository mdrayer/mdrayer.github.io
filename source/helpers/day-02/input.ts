import { Direction } from './util';

const DAY_2_TEST_STR = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

function parseInput(input: string) {
  return input.split(/\n/).map(str => {
    const [direction, units] = str.split(' ');
    return {
      direction: direction as Direction,
      units: Number(units),
    };
  });
}

export { DAY_2_TEST_STR, parseInput };
