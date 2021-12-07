import fs from 'fs';
import path from 'path';

function getFile(
  filename: string,
  directory: string,
): { filename: string; contents: string } {
  const inputDirectory = path.join('./public', directory);
  const filePath = path.join(inputDirectory, filename);
  const contents = fs.readFileSync(filePath, 'utf8');
  return {
    filename,
    contents,
  };
}

function getInputFile(filename: string) {
  return getFile(filename, 'input');
}

export { getInputFile };
export default getFile;
