import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-07/input';
import {
  estimateFuel,
  estimateFuelPartTwo,
} from '../../source/helpers/day-07/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DaySevenProps {
  input: number[];
}
const DaySeven: NextPage<DaySevenProps> = ({ input }) => {
  const fuelCount = estimateFuel(input);
  const fuelPartTwo = estimateFuelPartTwo(input);
  return (
    <AocDayTemplate
      day={7}
      title="Day 7: The Treachery of Whales"
      partOneTitle="Determine the horizontal position that the crabs can align to using the least fuel possible. How much fuel must they spend to align to that position?"
      partOneContent={
        <p>
          The amount of fuel spent would be{' '}
          <strong>
            <Spoiler text={fuelCount.toLocaleString()} />
          </strong>
          .
        </p>
      }
      partTwoContent={
        <p>
          The amount of fuel spent would be{' '}
          <strong>
            <Spoiler text={fuelPartTwo.toLocaleString()} />
          </strong>
          .
        </p>
      }
      partTwoTitle="New formula. How much fuel must they spend to align to that position?"
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-07.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DaySeven;
