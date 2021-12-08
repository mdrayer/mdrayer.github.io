import { IOResult } from './input';

// Seven-segment display information
// https://en.wikipedia.org/wiki/Seven-segment_display
// Digit 1 has segment length of 2
// Digit 7 has segment length of 3
// Digit 4 has segment length of 4
// Digit 8 has segment length of 7
// Digits 0 and 9 have segment lengths of 6
// Digits 2, 3, and 5 have segment lengths of 5

// PART ONE: In the output values, how many times do digits 1, 4, 7, or 8 appear?
function parseIO(arr: IOResult[]): Record<number, number> {
  const dict: Record<number, number> = {};

  arr.forEach(({ output }) => {
    output.forEach(o => {
      switch (o.length) {
        case 2:
          dict[1] = (dict[1] || 0) + 1;
          break;
        case 3:
          dict[7] = (dict[7] || 0) + 1;
          break;
        case 4:
          dict[4] = (dict[4] || 0) + 1;
          break;
        case 7:
          dict[8] = (dict[8] || 0) + 1;
          break;
      }
    });
  });

  return dict;
}
function getPart1Count(arr: IOResult[]): number {
  const dict = parseIO(arr);
  const sum = [1, 4, 7, 8].reduce((prev, curr) => {
    return prev + (dict[curr] || 0);
  }, 0);
  return sum;
}

// PART TWO: For each entry, determine all of the wire/segment connections and decode the four-digit output values.
// What do you get if you add up all of the output values?
/*
  A seven-segment display would look like the following
   AAAA
  B    C
  B    C
   DDDD
  E    F
  E    F
   GGGG
*/
const ZERO = ['A', 'B', 'C', 'E', 'F', 'G'];
const ONE = ['C', 'F'];
const TWO = ['A', 'C', 'D', 'E', 'G'];
const THREE = ['A', 'C', 'D', 'F', 'G'];
const FOUR = ['B', 'C', 'D', 'F'];
const FIVE = ['A', 'B', 'D', 'F', 'G'];
const SIX = ['A', 'B', 'D', 'E', 'F', 'G'];
const SEVEN = ['A', 'C', 'F'];
const EIGHT = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const NINE = ['A', 'B', 'C', 'D', 'F', 'G'];
const NUMS = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];

type SegmentDictionary = Record<string, string>;

function getDictionaryP2(io: IOResult): SegmentDictionary {
  // Initialize empty dictionary.
  const segmentDict: SegmentDictionary = {};

  // Get our array of strings.
  const strArr = [...io.input, ...io.output];

  // Get our known digits based on string (segment) length.
  const digit1 = strArr.find(s => s.length === 2);
  const digit7 = strArr.find(s => s.length === 3);
  const digit4 = strArr.find(s => s.length === 4);
  const digit8 = strArr.find(s => s.length === 7);

  if (digit1 && digit7 && digit4 && digit8) {
    // Get the encoded letter for segment A by comparing digits 1 and 7.
    const [segmentA] = getStringDiff(digit1, digit7);
    segmentDict[segmentA] = 'A';

    // The possibilities for segments C and F is digit 1. However, we don't know in what order they are.
    const optionsCF = digit1.split('');

    // Find the possibilities for segments B and D by comparing digits 1 and 4.
    const optionsBD = getStringDiff(digit4, digit1);

    // Find the possibilities for segments E and G by comparing digit 8 with what we already have.
    const optionsEG = getStringDiff(
      digit8,
      [segmentA, ...optionsCF, ...optionsBD].join(''),
    );

    // Get all the possible digit 0, 6 and 9 segments.
    const zeroSixNineArr = strArr.filter(s => s.length === 6);
    // From these, can we determine what the options for segments E, D, and C are.
    const optionsEDC = getStringDiff(...zeroSixNineArr);
    // We can find our segment C by getting intersection against segmentsCFOptions.
    const [segmentC] = getArrIntersection(optionsCF, optionsEDC);
    segmentDict[segmentC] = 'C';

    // Now that we know segment C, we can determine segment F!
    const [segmentF] = optionsCF.filter(a => a !== segmentC);
    segmentDict[segmentF] = 'F';

    // We can determine segment E via intersection of groups EG and EDC.
    const [segmentE] = getArrIntersection(optionsEG, optionsEDC);
    segmentDict[segmentE] = 'E';

    // Thus far we can found the encoded segments for A, C, E, and F.
    // Keep following similar logic to determine the remaining segments of B, D, and G.
    const twoThreeFiveArr = strArr.filter(s => s.length === 5);
    const optionsBEF = getStringDiff(...twoThreeFiveArr);
    const [segmentB] = getArrIntersection(optionsBD, optionsBEF);
    segmentDict[segmentB] = 'B';
    const [segmentD] = optionsBD.filter(a => a !== segmentB);
    segmentDict[segmentD] = 'D';
    const [segmentG] = optionsEG.filter(a => a !== segmentE);
    segmentDict[segmentG] = 'G';
  }
  return segmentDict;
}

function parseIOPt2(arr: IOResult[]) {
  const decodedArr = arr.map(io => {
    const segmentDict = getDictionaryP2(io);
    // Decode output value.
    const decoded = io.output.map(a => {
      const decodedChars = a.split('').map(b => segmentDict[b]);
      const num = NUMS.findIndex(
        n =>
          decodedChars.every(a => n.includes(a)) &&
          n.every(a => decodedChars.includes(a)),
      );
      return num;
    });
    return Number(decoded.join(''));
  });

  return decodedArr.reduce((prev, curr) => prev + curr);
}

// After getting the solution above on my own, I found another solution that seemed to be widely
// used on /r/adventofcode. It saves us a couple lines and does not rely on a dictionary of decoded characters.
// https://youtu.be/ls5BFzuxGw4
function parseIOPt2MoreSmarter(arr: IOResult[]) {
  const decodedArr = arr.map(item => {
    // Get our array of strings.
    const strArr = [...item.input, ...item.output];

    // Get our known digits based on string (segment) length.
    const digit1 = strArr.find(s => s.length === 2);
    const digit7 = strArr.find(s => s.length === 3);
    const digit4 = strArr.find(s => s.length === 4);
    const digit8 = strArr.find(s => s.length === 7);

    if (!digit1 || !digit4 || !digit7 || !digit8) {
      throw new Error('Digits 1, 4, 7, and/or 8 not found. This cannot be...');
    }

    // Segments of length 5 are digits 2, 3, and 5.
    const len5Arr = strArr.filter(s => s.length === 5);
    // 3 is the only option here that includes all segments of digit 1.
    const digit3 = len5Arr.find(s =>
      digit1.split('').every(a => s.includes(a)),
    );
    // 2 matches against 4 in two segments (C, D), while 3 and 5 match 4 in three segments.
    const digit2 = len5Arr.find(
      s => getArrIntersection(s.split(''), digit4.split('')).length === 2,
    );
    // Since we know digits 2 and 3, we can now deduce 5.
    const digit5 = len5Arr.find(s => s !== digit3 && s !== digit2);
    if (!digit3 || !digit5 || !digit2) {
      throw new Error('Digits 2, 3, and/or 5 not found.');
    }

    // Segments of length 6 are digits 0, 6, and 9.
    const len6Arr = strArr.filter(s => s.length === 6);
    // 6 is the only option here that does _not_ include all segments of digit 1.
    const digit6 = len6Arr.find(
      s => !digit1.split('').every(a => s.includes(a)),
    );
    if (!digit6) {
      throw new Error('Digit 6 not found.');
    }

    // Between 0 and 9, 0 does _not_ include all segments of digit 0.
    const digit0 = len6Arr.find(
      s => s !== digit6 && !digit4.split('').every(a => s.includes(a)),
    );
    if (!digit0) {
      throw new Error('Digit 0 not found.');
    }
    // This means that the remaining item is digit 9.
    const digit9 = len6Arr.find(s => s !== digit6 && s !== digit0);
    if (!digit9) {
      throw new Error('Digit 9 not found.');
    }

    // List out the known patterns in the correct order.
    const patterns = [
      digit0,
      digit1,
      digit2,
      digit3,
      digit4,
      digit5,
      digit6,
      digit7,
      digit8,
      digit9,
    ].map(p => p.split('').sort());

    // Now that we know all the patterns, it is time to decode our output.
    const decoded = Number(
      item.output
        .map(o => {
          const oArr = o.split('').sort();
          const index = patterns.findIndex(
            a =>
              oArr.every(o => a.includes(o)) && a.every(b => oArr.includes(b)),
          );
          if (index === -1) {
            throw new Error(`Pattern not found for ${o}.`);
          }
          return index;
        })
        .join(''),
    );
    return decoded;
  });

  return decodedArr.reduce((prev, curr) => prev + curr);
}

// HELPER FUNCTIONS FOR ARRAY AND STRING COMPARISONS.
function getArrIntersection(arrA: string[], arrB: string[]): string[] {
  return arrA.filter(a => arrB.includes(a));
}
function getArrDiff(
  arrA: string[],
  arrB: string[],
  isSymmetricDiff = true,
): string[] {
  const diff = arrA.filter(a => !arrB.includes(a));
  if (isSymmetricDiff) {
    return diff.concat(arrB.filter(a => !arrA.includes(a)));
  }
  return diff;
}
function getStringDiff(...arr: string[]): string[] {
  const diff: string[] = [];

  for (let i = 1; i < arr.length; i++) {
    const prevStrArr = arr[i - 1].split('');
    const currStrArr = arr[i].split('');
    const d = getArrDiff(prevStrArr, currStrArr);
    diff.push(...d);
  }

  // Only return unique values.
  return diff.reduce<string[]>((prev, curr) => {
    if (!prev.includes(curr)) {
      return prev.concat(curr);
    }
    return prev;
  }, []);
}

export { getPart1Count, parseIOPt2, parseIOPt2MoreSmarter };
