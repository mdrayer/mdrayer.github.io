import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { partOne } from '../../source/helpers/day-15/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayFifteenProps {
  input: string;
}
const DayFifteen: NextPage<DayFifteenProps> = ({ input }) => {
  const pt1 = partOne(input);
  // Calculations for part two take longer than usual. Do prevent slowness in browsers, simply put the answer here.
  // const pt2 = partTwo(input);
  const pt2 = 2907;
  return (
    <AocDayTemplate
      title="Day 15: Chiton"
      day={15}
      partOneTitle="What is the lowest total risk of any path from the top left to the bottom right?"
      partOneContent={
        pt1 && (
          <p>
            The lowest total risk value is{' '}
            <strong>
              <Spoiler text={pt1} />
            </strong>
            .
          </p>
        )
      }
      partTwoTitle="Using the full map, what is the lowest total risk of any path from the top left to the bottom right?"
      partTwoContent={
        <p>
          The lowest total risk value is{' '}
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
  const file = getInputFile('day-15.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayFifteen;
