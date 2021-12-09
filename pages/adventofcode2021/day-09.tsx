import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-09/input';
import { getBasins, getSum } from '../../source/helpers/day-09/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayNineProps {
  input: number[][];
}
const DayNine: NextPage<DayNineProps> = ({ input }) => {
  const sum = getSum(input);
  const product = getBasins(input);
  return (
    <AocDayTemplate
      title="Day 9: Smoke Basin"
      day={9}
      partOneTitle="What is the sum of the risk levels of all low points on your heightmap?"
      partOneContent={
        <p>
          The sum is{' '}
          <strong>
            <Spoiler text={sum.toLocaleString()} />
          </strong>
          .
        </p>
      }
      partTwoTitle="What do you get if you multiply together the sizes of the three largest basins?"
      partTwoContent={
        <p>
          The product of the three largest basins is{' '}
          <strong>
            <Spoiler text={product.toLocaleString()} />
          </strong>
          .
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-09.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayNine;
