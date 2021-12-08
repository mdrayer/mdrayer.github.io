import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { IOResult, parseInput } from '../../source/helpers/day-08/input';
import {
  getPart1Count,
  parseIOPt2MoreSmarter,
} from '../../source/helpers/day-08/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayEightProps {
  input: IOResult[];
}
const DayEight: NextPage<DayEightProps> = ({ input }) => {
  const sumPt1 = getPart1Count(input);
  const sumPt2 = parseIOPt2MoreSmarter(input);
  return (
    <AocDayTemplate
      title="Day 8: Seven Segment Search"
      day={8}
      partOneTitle="In the output values, how many times do digits 1, 4, 7, or 8 appear?"
      partOneContent={
        <p>
          The digits 1, 4, 7, and 8 appear{' '}
          <strong>
            <Spoiler text={sumPt1.toLocaleString()} />
          </strong>{' '}
          times.
        </p>
      }
      partTwoTitle="What do you get if you add up all of the output values?"
      partTwoContent={
        <p>
          The sum of all the output values is{' '}
          <strong>
            <Spoiler text={sumPt2.toLocaleString()} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-08.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayEight;
