import { DAY_20_TEST_STR } from './input';

const LIGHT_PIXEL = '#';
const DARK_PIXEL = '.';

function parseInput(input: string) {
  const [imgEnhAlg, inputImage] = input.split(/\n\n/);
  return { imgEnhAlg, inputImage: inputImage.split(/\n/) };
}

function getLightCount(input = DAY_20_TEST_STR, iterations = 2) {
  /*
  The first section is the image enhancement algorithm.
  The second section is the input image, a two-dimensional grid of light pixels (#) and dark pixels (.).
  */
  const { imgEnhAlg, inputImage } = parseInput(input);

  let outputImage = inputImage.slice();

  for (let i = 0; i < iterations; i++) {
    outputImage = getImage(imgEnhAlg, outputImage, i + 1);
  }

  // Count the number of light pixels.
  return (outputImage.join('').match(new RegExp(LIGHT_PIXEL, 'g')) || [])
    .length;
}

function getImage(
  imgEnhAlg: string,
  inputImage: string[],
  iteration: number,
): string[] {
  const emptyChar =
    imgEnhAlg[0] === LIGHT_PIXEL && iteration % 2 === 0
      ? LIGHT_PIXEL
      : DARK_PIXEL;

  // Add dark pixels all around the input image twice.
  const xLen = inputImage[0].length;
  const emptyRow = Array.from({ length: xLen + 4 })
    .map(() => emptyChar)
    .join('');
  const infInputImage = [
    emptyRow,
    emptyRow,
    ...inputImage.map(a => emptyChar + emptyChar + a + emptyChar + emptyChar),
    emptyRow,
    emptyRow,
  ];

  const arr = infInputImage.map((row, y) => {
    return row
      .split('')
      .map((_, x) => {
        return getPixel([x, y], imgEnhAlg, infInputImage, emptyChar);
      })
      .join('');
  });

  return arr;
}

function getPixel(
  [x, y]: [number, number],
  imgEnhAlg: string,
  inputImage: string[],
  emptyChar: string,
) {
  /*
  The image enhancement algorithm describes how to enhance an image by simultaneously converting
  all pixels in the input image into an output image. Each pixel of the output image is determined
  by looking at a 3x3 square of pixels centered on the corresponding input image pixel. So, to
  determine the value of the pixel at (5,10) in the output image, nine pixels from the input image
  need to be considered: (4,9), (4,10), (4,11), (5,9), (5,10), (5,11), (6,9), (6,10), and (6,11).
  These nine input pixels are combined into a single binary number that is used as an index in the
  image enhancement algorithm string.
  */
  const binStr = [y - 1, y, y + 1]
    .map(yy => {
      if (yy < 0 || yy >= inputImage.length) {
        return emptyChar + emptyChar + emptyChar;
      }
      const row = inputImage[yy];
      const str = [x - 1, x, x + 1]
        .map(xx => (xx < 0 || xx >= row.length ? emptyChar : row[xx]))
        .join('');
      return str;
    })
    .join('')
    // Turn dark pixels (.) into 0 and light pixels (#) into 1
    .replaceAll(DARK_PIXEL, '0')
    .replaceAll(LIGHT_PIXEL, '1');
  const binNum = parseInt(binStr, 2);
  return imgEnhAlg[binNum];
}

export { getLightCount };
