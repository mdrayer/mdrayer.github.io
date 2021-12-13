import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-11/input';
import { getInfo } from '../../source/helpers/day-11/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayElevenProps {
  input: number[][];
}
const DayEleven: NextPage<DayElevenProps> = ({ input }) => {
  const { firstStepAllFlash, totalFlashes } = getInfo(input);
  return (
    <AocDayTemplate
      title="Day 11: Dumbo Octopus"
      day={11}
      partOneTitle="How many total flashes are there after 100 steps?"
      partOneContent={
        <p>
          There are{' '}
          <strong>
            <Spoiler text={totalFlashes} />
          </strong>{' '}
          total flashes after 100 steps.
        </p>
      }
      partTwoTitle="What is the first step during which all octopuses flash?"
      partTwoContent={
        <p>
          The first step is{' '}
          <strong>
            <Spoiler text={firstStepAllFlash || 0} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-11.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayEleven;
