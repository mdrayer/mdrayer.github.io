import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { partOne, partTwo } from '../../source/helpers/day-14/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayFourteenProps {
  input: string;
}
const DayFourteen: NextPage<DayFourteenProps> = ({ input }) => {
  const pt1 = partOne(input);
  const pt2 = partTwo(input);
  return (
    <AocDayTemplate
      title="Day 14: Extended Polymerization"
      day={14}
      partOneTitle="After 10 steps, What do you get if you take the quantity of the most common element and subtract the quantity of the least common element?"
      partOneContent={
        <p>
          The result is{' '}
          <strong>
            <Spoiler text={pt1} />
          </strong>
          .
        </p>
      }
      partTwoTitle="After 40 steps, what do you get if you take the quantity of the most common element and subtract the quantity of the least common element?"
      partTwoContent={
        <p>
          The result is{' '}
          <strong>
            <Spoiler text={pt2} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-14.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayFourteen;
