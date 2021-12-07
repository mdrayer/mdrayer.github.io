interface Stats {
  equal: number;
  larger: number;
  smaller: number;
}
type GetValueFunc = (arr: number[], index: number) => number;
function getCompare(
  arr: number[],
  start: number,
  stop: number,
  getValueFunc: GetValueFunc,
): Stats {
  let equal = 0;
  let larger = 0;
  let smaller = 0;

  for (let i = start; i < stop; i++) {
    const curr = getValueFunc(arr, i);
    const prev = getValueFunc(arr, i - 1);
    if (curr > prev) {
      larger++;
    } else if (curr < prev) {
      smaller++;
    } else {
      equal++;
    }
  }

  return { equal, larger, smaller };
}

function getStats(arr: number[]): Stats {
  return getCompare(arr, 1, arr.length, (a, i) => a[i]);
}

// The amount of numbers to include in the sum.
const sumCount = 3;
const rangeArr = Array.from({ length: sumCount }).map((_, i) => i);
const sumReducer = (prev: number, curr: number): number => prev + curr;
function getSumStats(arr: number[]): Stats {
  return getCompare(arr, 1, arr.length - (sumCount - 1), (a, i) =>
    rangeArr.map(r => a[i + r]).reduce(sumReducer),
  );
}

export { getStats, getSumStats };
