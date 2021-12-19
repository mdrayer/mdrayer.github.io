interface Velocity {
  x: number;
  y: number;
}

type Coords = [number, number];

interface TargetArea {
  x: [number, number];
  y: [number, number];
}
function parseInput(input: string): TargetArea {
  const x = input.match(/x=(-?\d+)..(-?\d+)/);
  const y = input.match(/y=(-?\d+)..(-?\d+)/);

  if (x === null || y === null) {
    throw new Error('No matches found in string.');
  }

  return {
    x: [Number(x[1]), Number(x[2])],
    y: [Number(y[1]), Number(y[2])],
  };
}
function getAnswer(input: string) {
  const targetArea = parseInput(input);

  const MAX_X = targetArea.x[1];
  const MIN_Y = targetArea.y[0];
  // TODO: Not use a static value as the max Y velocity. But how....
  const MAX_Y = 100;

  const hits: Array<[number, number]> = [];
  const highestYArr: number[] = [];

  for (let velX = 0; velX <= MAX_X; velX++) {
    // Try positive velocities.
    for (let velY = 0; velY <= MAX_Y; velY++) {
      const { hit, highestY } = shootVelocity(velX, velY, targetArea);
      if (hit) {
        hits.push([velX, velY]);
        highestYArr.push(highestY);
      }
    }

    // Try negative velocities.
    for (let velY = 0; velY >= MIN_Y; velY--) {
      const { hit, highestY } = shootVelocity(velX, velY, targetArea);
      if (hit) {
        hits.push([velX, velY]);
        highestYArr.push(highestY);
      }
    }
  }

  const pt2 = new Set(hits.map(([a, b]) => `${a},${b}`)).size;
  const pt1 = Math.max(...highestYArr);
  return { pt1, pt2 };
}

function shootVelocity(x: number, y: number, targetArea: TargetArea) {
  // The probe's x,y position starts at 0,0. Then, it will follow some trajectory by moving in steps.
  const position: Coords = [0, 0];
  let velocity: Velocity = { x, y };
  let highestY = position[1];

  let hit = false;
  let over = false;
  while (!hit || !over) {
    /*
    On each step, these changes occur in the following order:
    - The probe's x position increases by its x velocity.
    - The probe's y position increases by its y velocity.
    */
    position[0] = position[0] + velocity.x;
    position[1] = position[1] + velocity.y;

    if (position[1] > highestY) {
      highestY = position[1];
    }

    if (
      position[0] >= targetArea.x[0] &&
      position[0] <= targetArea.x[1] &&
      position[1] >= targetArea.y[0] &&
      position[1] <= targetArea.y[1]
    ) {
      // Position is in the target area. Stop.
      hit = true;
      break;
    }

    if (position[0] > targetArea.x[1] || position[1] < targetArea.y[0]) {
      // Position is out of bounds of the target area. Stop.
      over = true;
      break;
    }

    /*
    Due to drag, the probe's x velocity changes by 1 toward the value 0; that is,
    - it decreases by 1 if it is greater than 0, 
    - increases by 1 if it is less than 0,
    - or does not change if it is already 0.
    Due to gravity, the probe's y velocity decreases by 1.
    */
    velocity = {
      x: velocity.x > 0 ? velocity.x - 1 : velocity.x < 0 ? velocity.x + 1 : 0,
      y: velocity.y - 1,
    };
  }

  return { hit, highestY };
}

export { getAnswer };
