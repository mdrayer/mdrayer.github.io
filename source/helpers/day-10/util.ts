interface Chunk {
  open: string;
  close: string;
}

const ROUND: Chunk = {
  open: '(',
  close: ')',
};
const SQUARE: Chunk = {
  open: '[',
  close: ']',
};
const CURLY: Chunk = {
  open: '{',
  close: '}',
};
const ANGLE: Chunk = {
  open: '<',
  close: '>',
};
const CHUNKS: ReadonlyArray<Chunk> = [ROUND, SQUARE, CURLY, ANGLE];
const OPEN_CHARS: ReadonlyArray<string> = CHUNKS.map(c => c.open);
const CLOSE_CHARS: ReadonlyArray<string> = CHUNKS.map(c => c.close);
/*
): 3 points.
]: 57 points.
}: 1197 points.
>: 25137 points.
*/
const SCORING: Record<string, number> = {
  [ROUND.close]: 3,
  [SQUARE.close]: 57,
  [CURLY.close]: 1197,
  [ANGLE.close]: 25137,
};

function getCorruptChar(row: string): string | undefined {
  // Keep track of open characters.
  const openArr: string[] = [];
  // Get the first incorrect closing character on each corrupted line.
  const items = row.split('');
  for (let i = 0; i < items.length; i++) {
    const char = items[i];
    if (OPEN_CHARS.includes(char)) {
      // Current char is an opening character.
      openArr.push(char);
    } else if (CLOSE_CHARS.includes(char)) {
      // Current char is a closing character.
      // Check to see if last open character matches this char.
      const chunk = CHUNKS.find(c => c.close === char);
      const lastOpen = openArr.pop();
      if (chunk && lastOpen && chunk.open === lastOpen) {
        // If it does match, then do nothing.
        continue;
      } else {
        return char;
      }
    }
  }
}

function getErrorSyntaxScore(input: string[]): number {
  // Keep track of syntax error characters.
  const errChars: string[] = [];

  input.forEach(row => {
    const corruptChar = getCorruptChar(row);
    if (corruptChar) {
      errChars.push(corruptChar);
    }
  });

  return errChars.reduce<number>(
    (prev, curr) => prev + (SCORING[curr] || 0),
    0,
  );
}

/*
): 1 point.
]: 2 points.
}: 3 points.
>: 4 points.
*/
const SCORING_PART_TWO: Record<string, number> = {
  [ROUND.close]: 1,
  [SQUARE.close]: 2,
  [CURLY.close]: 3,
  [ANGLE.close]: 4,
};

function getMiddleScore(input: string[]) {
  // Filter out the corrupted lines to get the incomplete lines.
  const incompleteLines = input.filter(row => !getCorruptChar(row));

  const scoresArr = incompleteLines
    .map(row => {
      // Keep track of open characters.
      const openArr: string[] = [];
      // Get the first incorrect closing character on each corrupted line.
      const items = row.split('');
      for (let i = 0; i < items.length; i++) {
        const char = items[i];
        if (OPEN_CHARS.includes(char)) {
          // Current char is an opening character.
          openArr.push(char);
        } else if (CLOSE_CHARS.includes(char)) {
          // Current char is a closing character.
          // Since we know the line is not corrupted,
          // we can safely just pop off the last item in the open array since it matches.
          openArr.pop();
        }
      }
      // Find the missing closing chars based on the remaining items in the open array.
      const closingArr = openArr.reverse().map(o => {
        const chunk = CHUNKS.find(c => c.open === o);
        if (!chunk) {
          throw new Error(`Chunk not found for ${o}.`);
        }
        return chunk.close;
      });
      return closingArr.reduce<number>((prev, curr) => {
        return prev * 5 + (SCORING_PART_TWO[curr] || 0);
      }, 0);
    })
    .sort((a, b) => a - b);

  const middleIndex = Math.floor(scoresArr.length / 2);
  return scoresArr[middleIndex];
}

export { getErrorSyntaxScore, getMiddleScore };
