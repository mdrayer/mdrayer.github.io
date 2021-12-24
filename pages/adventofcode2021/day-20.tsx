import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { getLightCount } from '../../source/helpers/day-20/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayTwentyProps {
  input: string;
}
const DayTwenty: NextPage<DayTwentyProps> = ({ input }) => {
  const pt1 = getLightCount(input);
  const pt2 = getLightCount(input, 50);
  return (
    <AocDayTemplate
      title="Day 20: Trench Map"
      day={20}
      partOneTitle="How many pixels are lit in the resulting image?"
      partOneContent={
        <p>
          <strong>
            <Spoiler text={pt1} />
          </strong>{' '}
          pixels are lit.
        </p>
      }
      partTwoTitle="How many pixels are lit in the resulting image?"
      partTwoContent={
        <p>
          <strong>
            <Spoiler text={pt2} />
          </strong>{' '}
          pixels are lit.
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-20.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayTwenty;
