import { NextPage } from 'next';
// import { partOne } from '../../source/helpers/day-19/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayNineteenProps {
  input: string;
}
const DayNineteen: NextPage<DayNineteenProps> = () => {
  // const pt1 = partOne(input);
  return (
    <AocDayTemplate
      title="Day 19: Beacon Scanner"
      day={19}
      partOneTitle="How many beacons are there?"
      partOneContent={<p>???</p>}
      partTwoTitle="???"
      partTwoContent={<p>???</p>}
    />
  );
};

export async function getStaticProps() {
  const file = getInputFile('day-19.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayNineteen;
