function parseInput(input: string): string[] {
  return input.split(/\n/);
}
function partOne(input: string) {
  const parsed = parseInput(input);

  /*
  To reduce a snailfish number, you must repeatedly do the first action in this list that applies
  to the snailfish number:
  - If any pair is nested inside four pairs, the leftmost such pair explodes.
  - If any regular number is 10 or greater, the leftmost such regular number splits.
  Once no action in the above list applies, the snailfish number is reduced.
  */
  return getMagnitude(getResult(parsed));
}

function getMagnitude(str: string): number {
  /*
  The magnitude of a pair is 3 times the magnitude of its left element plus 2 times the magnitude
  of its right element. The magnitude of a regular number is just that number.

  For example, the magnitude of [9,1] is 3*9 + 2*1 = 29; the magnitude of [1,9] is 3*1 + 2*9 = 21.
  Magnitude calculations are recursive: the magnitude of [[9,1],[1,9]] is 3*29 + 2*21 = 129.
  */
  let newStr = str;
  // Start by getting all the regular number pairs in the string.
  let matched = newStr.match(/(\[\d+,\d+\])/g);
  while (matched) {
    if (matched && matched[0]) {
      const val = matched[0];
      const index = newStr.indexOf(val);
      if (index > -1) {
        const [a, b] = val.replace(/\[|\]/g, '').split(',').map(Number) as [
          number,
          number,
        ];
        const newVal = 3 * a + 2 * b;
        newStr =
          newStr.substring(0, index) +
          String(newVal) +
          newStr.substring(index + val.length);
      }
    }
    matched = newStr.match(/(\[\d+,\d+\])/g);
  }

  return Number(newStr);
}

function getResult(arr: string[]) {
  return arr.reduce((a, b) => reduce(add(a, b)));
}

function reduce(str: string) {
  let newStr = str;
  let explodeResult = nextExplode(newStr);
  let splitResult = nextSplit(newStr);

  while (explodeResult || splitResult) {
    if (explodeResult) {
      newStr = explode(explodeResult.pair, explodeResult.index, newStr);
    } else if (splitResult) {
      newStr = split(splitResult.value, splitResult.index, newStr);
    } else {
      break;
    }
    explodeResult = nextExplode(newStr);
    splitResult = nextSplit(newStr);
  }

  return newStr;
}

interface NextExplode {
  pair: [number, number];
  index: number;
}
function nextExplode(str: string): NextExplode | undefined {
  // If any pair is nested inside four pairs, the leftmost such pair explodes.
  // Get all regular number pairs in the string.
  const matches = str.matchAll(/(\[\d+,\d+\])/g);
  if (matches) {
    // Check to see if the matched pairs are nested over 4 times.
    let result = matches.next();
    while (!result.done) {
      const index = result.value.index;
      if (typeof index === 'number') {
        const leftStr = str.substring(0, index);
        let depth = 0;
        for (const c of leftStr) {
          switch (c) {
            case '[':
              depth++;
              break;
            case ']':
              depth--;
              break;
          }
        }
        if (depth >= 4) {
          // Get the pair values from the string.
          const pair = result.value[0]
            .replace(/\[|\]/g, '')
            .split(',')
            .map(Number) as [number, number];
          return {
            pair,
            index,
          };
        }
      }
      result = matches.next();
    }
  }
}

interface NextSplit {
  value: number;
  index: number;
}
function nextSplit(str: string): NextSplit | undefined {
  // If any regular number is 10 or greater, the leftmost such regular number splits.
  const matched = str.matchAll(/(\d{2,})/g);
  if (matched) {
    // Check to see if the matched strings are 10 or greater.
    let result = matched.next();
    while (!result.done) {
      const num = Number(result.value[0]);
      const index = result.value.index;
      if (!isNaN(num) && num >= 10 && typeof index === 'number') {
        return {
          value: num,
          index,
        };
      }
      result = matched.next();
    }
  }
}

function add(a: string, b: string): string {
  /*
  To add two snailfish numbers, form a pair from the left and right parameters of the addition operator.
  For example, [1,2] + [[3,4],5] becomes [[1,2],[[3,4],5]].
  */
  return `[${a},${b}]`;
}

function explode(pair: [number, number], index: number, str: string): string {
  const pairStr = `[${pair[0]},${pair[1]}]`;
  /*
  To explode a pair, the pair's left value is added to the first regular number to the left of the
  exploding pair (if any), and the pair's right value is added to the first regular number to the
  right of the exploding pair (if any). Exploding pairs will always consist of two regular numbers.
  Then, the entire exploding pair is replaced with the regular number 0.
  */

  // Find the first regular number to the left of the pair.
  let start = str.substring(0, index);
  const leftNumMatch = start.match(/(\d+)(?!.*\d)/);
  if (leftNumMatch && leftNumMatch[1]) {
    const leftNum = Number(leftNumMatch[1]);
    const leftNumIndex = leftNumMatch.index;
    if (typeof leftNumIndex === 'number') {
      start =
        start.substring(0, leftNumIndex) +
        (leftNum + pair[0]) +
        start.substring(leftNumIndex + leftNumMatch[1].length);
    }
  }

  // Find the first regular number to the right of the pair.
  let end = str.substring(index + pairStr.length);
  const rightNumMatch = end.match(/\d+/);
  if (rightNumMatch && rightNumMatch[0]) {
    const rightNum = Number(rightNumMatch[0]);
    const rightNumIndex = rightNumMatch.index;
    if (typeof rightNumIndex === 'number') {
      end =
        end.substring(0, rightNumIndex) +
        (rightNum + pair[1]) +
        end.substring(rightNumIndex + rightNumMatch[0].length);
    }
  }
  return start + '0' + end;
}

function split(n: number, index: number, str: string): string {
  /*
  To split a regular number, replace it with a pair; the left element of the pair should be the
  regular number divided by two and rounded down, while the right element of the pair should be
  the regular number divided by two and rounded up.
  For example, 10 becomes [5,5], 11 becomes [5,6], 12 becomes [6,6], and so on.
  */
  const numLength = String(n).length;
  const start = str.substring(0, index);
  const end = str.substring(index + numLength);
  return start + `[${Math.floor(n / 2)},${Math.ceil(n / 2)}]` + end;
}

function partTwo(input: string): number {
  const parsed = parseInput(input);
  let maxMagnitude = -Infinity;

  // There's probably a more elegant way to do this, but brute force it is.
  for (const a of parsed) {
    for (const b of parsed) {
      const magnitude = getMagnitude(getResult([a, b]));
      if (magnitude > maxMagnitude) {
        maxMagnitude = magnitude;
      }
    }
  }
  return maxMagnitude;
}

export { partOne, partTwo };
