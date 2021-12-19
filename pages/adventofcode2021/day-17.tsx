import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { DAY_17_INPUT } from '../../source/helpers/day-17/input';
import { getAnswer } from '../../source/helpers/day-17/util';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DaySeventeenProps {
  input: string;
}
const DaySeventeen: NextPage<DaySeventeenProps> = ({ input }) => {
  const { pt1, pt2 } = getAnswer(input);
  return (
    <AocDayTemplate
      title="Day 17: Trick Shot"
      day={17}
      partOneTitle="What is the highest y position it reaches on this trajectory?"
      partOneContent={
        <p>
          The highest y position is{' '}
          <strong>
            <Spoiler text={pt1} />
          </strong>
          .
        </p>
      }
      partTwoTitle="How many distinct initial velocity values cause the probe to be within the target area after any step?"
      partTwoContent={
        <p>
          There are{' '}
          <strong>
            <Spoiler text={pt2} />
          </strong>{' '}
          distinct initial velocity values.
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  return {
    props: {
      input: DAY_17_INPUT,
    },
  };
}

export default DaySeventeen;
