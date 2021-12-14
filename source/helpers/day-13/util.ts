type FoldDirection = 'x' | 'y';
export interface Coords {
  x: number;
  y: number;
}
interface FoldInstruction {
  direction: FoldDirection;
  position: number;
}
interface Parsed {
  dots: Coords[];
  instructions: FoldInstruction[];
}

function parseInput(input: string): Parsed {
  const [dots, instructions] = input.split(/\n\n/).map(a => a.split(/\n/));
  return {
    dots: dots.map(a => {
      const [x, y] = a.split(',').map(Number);
      return { x, y };
    }),
    instructions: instructions.map(a => {
      const [direction, value] = a.replace('fold along ', '').split('=');
      return {
        direction: direction as FoldDirection,
        position: Number(value),
      };
    }),
  };
}

function getArray(input: string, numOfFolds?: number) {
  const { dots, instructions } = parseInput(input);

  let dotsArr = dots.slice();

  for (
    let i = 0;
    i < (typeof numOfFolds === 'number' ? numOfFolds : instructions.length);
    i++
  ) {
    const instruction = instructions[i];
    dotsArr = dotsArr
      .map(({ x, y }) => ({
        x:
          instruction.direction === 'x' && x > instruction.position
            ? x - (x - instruction.position) * 2
            : x,
        y:
          instruction.direction === 'y' && y > instruction.position
            ? y - (y - instruction.position) * 2
            : y,
      }))
      // We only want unique values. We should probably use Set here, but it was being funny...
      .reduce<Coords[]>((arr, curr) => {
        if (!arr.some(a => a.x === curr.x && a.y === curr.y)) {
          return [...arr, curr];
        }
        return arr;
      }, []);
  }

  return dotsArr;
}

function partOne(input: string): number {
  return getArray(input, 1).length;
}

function partTwo(input: string) {
  return getArray(input);
}

export { partOne, partTwo };
