// For part 1, the cost is simply the distance to the position from the current position.
const getFuelCostPt1 = (curr: number, position: number) =>
  Math.abs(curr - position);
function getFuelCostPt2(
  currentPosition: number,
  desiredPosition: number,
): number {
  const length = Math.abs(currentPosition - desiredPosition);
  // Cost increases 1 per step, so 1, 2, 3, 4, 5, etc.
  // So 2 steps would cost 1 + 2 = 3,
  // 3 steps would cost 1 + 2 + 3 = 6,
  // 4 steps would cost 1 + 2 + 3 + 4 = 10, and so on.
  // The sum uses formula ((n + 1) * n) / 2
  // See https://en.wikipedia.org/wiki/Triangular_number
  return ((length + 1) * length) / 2;
  // Original "brute force" style answer below. Above is the mathematical formula way that gets the same result.
  // let fuel = 0;
  // for (let i = 0; i < length; i++) {
  //   fuel += i + 1;
  // }
  // return fuel;
}

function estimateFuel(
  initialPositions: number[],
  getFuelFnc: (curr: number, position: number) => number = getFuelCostPt1,
): number {
  let fuel: number | undefined;

  // Get the min and max of our positions.
  const minPos = Math.min(...initialPositions);
  const maxPos = Math.max(...initialPositions);

  for (let i = minPos; i <= maxPos; i++) {
    const currFuel = initialPositions.reduce((prev, curr) => {
      return prev + getFuelFnc(curr, i);
    }, 0);
    if (!fuel || fuel > currFuel) {
      fuel = currFuel;
    }
  }

  if (typeof fuel !== 'number') {
    throw new Error('Fuel count not estimated.');
  }

  return fuel;
}
function estimateFuelPartTwo(initialPositions: number[]): number {
  return estimateFuel(initialPositions, getFuelCostPt2);
}

export { estimateFuel, estimateFuelPartTwo };
