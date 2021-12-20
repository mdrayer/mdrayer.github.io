import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { partOne } from '../../source/helpers/day-18/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayEighteenProps {
  input: string;
}
const DayEighteen: NextPage<DayEighteenProps> = ({ input }) => {
  const pt1 = partOne(input);
  // Compile times for partTwo took a few seconds,
  // so we're just going to use a static var.
  // const pt2 = partTwo(input);
  const pt2 = 4807;
  return (
    <AocDayTemplate
      title="Day 18: Snailfish"
      day={18}
      partOneTitle="What is the magnitude of the final sum?"
      partOneContent={
        <p>
          The magnitude is{' '}
          <strong>
            <Spoiler text={pt1} />
          </strong>
          .
        </p>
      }
      partTwoTitle="What is the largest magnitude of any sum of two different snailfish numbers from the homework assignment?"
      partTwoContent={
        <p>
          The largest magnitude is{' '}
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
  const file = getInputFile('day-18.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayEighteen;
