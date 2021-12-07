import type { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { parseInput } from '../../source/helpers/day-01/input';
import { getStats, getSumStats } from '../../source/helpers/day-01/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayOneProps {
  input: number[];
}
const DayOne: NextPage<DayOneProps> = ({ input }) => {
  const stats = getStats(input);
  const sumStats = getSumStats(input);
  return (
    <AocDayTemplate
      day={1}
      title="Day 1: Sonar Sweep"
      partOneTitle="How many measurements are larger than the previous measurement?"
      partOneContent={
        <p>
          There were{' '}
          <strong>
            <Spoiler text={stats.larger.toLocaleString()} />
          </strong>{' '}
          larger measurements. Additionally, there were{' '}
          {stats.equal.toLocaleString()} equal measurements and{' '}
          {stats.smaller.toLocaleString()} smaller measurements.
        </p>
      }
      partTwoTitle="How many sums are larger than the previous sum?"
      partTwoContent={
        <p>
          There were{' '}
          <strong>
            <Spoiler text={sumStats.larger.toLocaleString()} />
          </strong>{' '}
          larger sums. Additionally, there were{' '}
          {sumStats.equal.toLocaleString()} equal sums and{' '}
          {sumStats.smaller.toLocaleString()} smaller sums.
        </p>
      }
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-01.txt');
  return {
    props: {
      input: parseInput(file.contents),
    },
  };
}

export default DayOne;
