import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-02/input';
import {
  getAim,
  getPosition,
  InputDatum,
} from '../../source/helpers/day-02/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayTwoProps {
  input: InputDatum[];
}
const DayTwo: NextPage<DayTwoProps> = ({ input }) => {
  const { depth, horizontal } = getPosition(input);
  const aim = getAim(input);
  return (
    <AocDayTemplate
      day={2}
      title="Day 2: Dive!"
      partOneTitle="What do you get if you multiply your final horizontal position by your final depth?"
      partOneContent={
        <p>
          The final horizontal position is {horizontal.toLocaleString()} units
          and the final depth is {depth.toLocaleString()} units, multiplied to
          equal{' '}
          <strong>
            <Spoiler text={(horizontal * depth).toLocaleString()} />
          </strong>{' '}
          units.
        </p>
      }
      partTwoTitle="What do you get if you multiply your final horizontal position by your final depth, accounting for aim?"
      partTwoContent={
        <p>
          The final horizontal is {aim.horizontal.toLocaleString()}, the final
          depth is {aim.depth.toLocaleString()}, and the final aim is{' '}
          {aim.aim.toLocaleString()}. Depth multiplied by horizontal equals{' '}
          <strong>
            <Spoiler text={(aim.depth * aim.horizontal).toLocaleString()} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-02.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayTwo;
