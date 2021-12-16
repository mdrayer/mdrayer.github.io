import { NextPage } from 'next';
import Spoiler from '../../source/components/Spoiler';
import { partOne, partTwo } from '../../source/helpers/day-16/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DaySixteenProps {
  input: string;
}
const DaySixteen: NextPage<DaySixteenProps> = ({ input }) => {
  const pt1 = partOne(input);
  const pt2 = partTwo(input);
  return (
    <AocDayTemplate
      title="Day 16: Packet Decoder"
      day={16}
      partOneTitle="What do you get if you add up the version numbers in all packets?"
      partOneContent={
        <p>
          The result is{' '}
          <strong>
            <Spoiler text={pt1} />
          </strong>
          .
        </p>
      }
      partTwoTitle="What do you get if you evaluate the expression represented by your hexadecimal-encoded BITS transmission?"
      partTwoContent={
        <p>
          The result is{' '}
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
  const file = getInputFile('day-16.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DaySixteen;
