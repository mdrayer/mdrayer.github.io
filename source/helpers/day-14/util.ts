interface Parsed {
  /** Polymer template - this is the starting point of the process. */
  polymerTemplate: string;
  /**
   * Pair insertion rules.
   * A rule like {'AB': 'C'} (AB -> C) means that when elements A and B are immediately adjacent,
   * element C should be inserted between them.
   */
  rules: Record<string, string>;
}
type StringCounts = Record<string, number>;
function parseInput(input: string): Parsed {
  const [polymerTemplate, rules] = input.split(/\n\n/);
  return {
    polymerTemplate,
    rules: rules.split(/\n/).reduce((d, curr) => {
      const [b, c] = curr.split(' -> ');
      return { ...d, [b]: c };
    }, {}),
  };
}

const STEPS = 10;

// Brute force approach.
function partOne(input: string) {
  const { polymerTemplate, rules } = parseInput(input);

  let str = polymerTemplate;

  for (let step = 0; step < STEPS; step++) {
    // Gather pairs.
    str = str
      .split('')
      .map((a, i, arr) => (i < arr.length - 1 ? a + arr[i + 1] : ''))
      .filter(a => a !== '')
      // Parse pairs and insert character based on pair insertion rules.
      .map(p => {
        return p[0] + (rules[p] || '');
      })
      .concat(str[str.length - 1])
      .join('');
  }

  // Get the character counts.
  const counts: StringCounts = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Get the min and max counts.
  const countsArr = Object.values(counts);
  const maxCount = Math.max(...countsArr);
  const minCount = Math.min(...countsArr);

  return maxCount - minCount;
}

const STEPS_PT_2 = 40;
// More better approach.
function partTwo(input: string) {
  const { polymerTemplate, rules } = parseInput(input);

  // Initialize pair counts.
  let pairCounts: StringCounts = polymerTemplate
    .split('')
    .map((a, i, arr) => (i < arr.length - 1 ? a + arr[i + 1] : ''))
    .filter(a => a !== '')
    .reduce<StringCounts>(
      (d, curr) => ({ ...d, [curr]: (d[curr] || 0) + 1 }),
      {},
    );

  // Initialize character counts.
  const charCounts: StringCounts = polymerTemplate
    .split('')
    .reduce<StringCounts>(
      (d, curr) => ({ ...d, [curr]: (d[curr] || 0) + 1 }),
      {},
    );

  for (let step = 0; step < STEPS_PT_2; step++) {
    const newPairCounts: StringCounts = {};
    // Iterate on each pair in our dictionary to generate new counts.
    Object.entries(pairCounts).forEach(([pair, count]) => {
      // Get the new character.
      const char = rules[pair];
      if (!char) {
        throw new Error(`No rule found for pair ${pair}.`);
      }
      // Add new character count.
      charCounts[char] = (charCounts[char] || 0) + count;
      // Add new pair counts.
      [pair[0] + char, char + pair[1]].forEach(p => {
        newPairCounts[p] = (newPairCounts[p] || 0) + count;
      });
    });

    pairCounts = newPairCounts;
  }

  // Get the min and max counts.
  const countsArr = Object.values(charCounts);
  const maxCount = Math.max(...countsArr);
  const minCount = Math.min(...countsArr);

  return maxCount - minCount;
}

export { partOne, partTwo };
