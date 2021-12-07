export type Direction = 'down' | 'forward' | 'up';
export interface InputDatum {
  direction: Direction;
  units: number;
}
interface Position {
  depth: number;
  horizontal: number;
}
function getPosition(arr: InputDatum[]): Position {
  let depth = 0;
  let horizontal = 0;

  arr.forEach(({ direction, units }) => {
    switch (direction) {
      case 'down':
        depth = depth + units;
        break;
      case 'forward':
        horizontal = horizontal + units;
        break;
      case 'up':
        depth = depth - units;
        break;
    }
  });

  return { depth, horizontal };
}
interface AimPosition {
  aim: number;
  depth: number;
  horizontal: number;
}
function getAim(arr: InputDatum[]): AimPosition {
  let aim = 0;
  let depth = 0;
  let horizontal = 0;

  arr.forEach(({ direction, units }) => {
    switch (direction) {
      case 'down':
        aim = aim + units;
        break;
      case 'forward':
        horizontal = horizontal + units;
        depth = depth + aim * units;
        break;
      case 'up':
        aim = aim - units;
        break;
    }
  });

  return { aim, depth, horizontal };
}

export { getAim, getPosition };
