import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-10/input';
import {
  getErrorSyntaxScore,
  getMiddleScore,
} from '../../source/helpers/day-10/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayTenProps {
  input: string[];
}
const DayTen: NextPage<DayTenProps> = ({ input }) => {
  const partOne = getErrorSyntaxScore(input);
  const partTwo = getMiddleScore(input);
  return (
    <AocDayTemplate
      title="Day 10: Syntax Scoring"
      day={10}
      partOneTitle="What is the total syntax error score for those errors?"
      partOneContent={
        <p>
          The total syntax error score is{' '}
          <strong>
            <Spoiler text={partOne} />
          </strong>
          .
        </p>
      }
      partTwoTitle="What is the middle score?"
      partTwoContent={
        <p>
          The middle score is{' '}
          <strong>
            <Spoiler text={partTwo} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-10.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayTen;
