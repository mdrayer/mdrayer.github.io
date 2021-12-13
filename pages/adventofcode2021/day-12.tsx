import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { DAY_12_STR, getPaths } from '../../source/helpers/day-12/util';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

const DayTwelve: NextPage = () => {
  const p = getPaths(DAY_12_STR);
  const t = getPaths(DAY_12_STR, true);
  return (
    <AocDayTemplate
      title="Day 12: Passage Pathing"
      day={12}
      partOneTitle="How many paths through this cave system are there that visit small caves at most once?"
      partOneContent={
        <p>
          There are{' '}
          <strong>
            <Spoiler text={p} />
          </strong>{' '}
          paths.
        </p>
      }
      partTwoTitle="Given these new rules, how many paths through this cave system are there?"
      partTwoContent={
        <p>
          There are{' '}
          <strong>
            <Spoiler text={t} />
          </strong>{' '}
          paths.
        </p>
      }
    />
  );
};

export default DayTwelve;
