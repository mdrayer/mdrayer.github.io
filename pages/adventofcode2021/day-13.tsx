import { NextPage } from 'next';
import { useState } from 'react';
import Spoiler from '../../source/components/Spoiler';
import { VarNames } from '../../source/config/theme';
import { Coords, partOne, partTwo } from '../../source/helpers/day-13/util';
import { getInputFile } from '../../source/helpers/getFile';
import AocDayTemplate from '../../source/layouts/AocDayTemplate';

interface DayThirteenProps {
  input: string;
}
const DayThirteen: NextPage<DayThirteenProps> = ({ input }) => {
  const [showPt2Solution, setShowPt2Solution] = useState(false);
  const pt1 = partOne(input);
  const pt2 = partTwo(input);
  const maxX = Math.max(...pt2.map(p => p.x));
  const maxY = Math.max(...pt2.map(p => p.y));
  return (
    <AocDayTemplate
      title="Day 13: Transparent Origami"
      day={13}
      partOneTitle="How many dots are visible after completing just the first fold instruction on your transparent paper?"
      partOneContent={
        <p>
          There are{' '}
          <strong>
            <Spoiler text={pt1} />
          </strong>{' '}
          visible dots.
        </p>
      }
      partTwoTitle="What code do you use to activate the infrared thermal imaging camera system?"
      partTwoContent={
        <div>
          <p>
            The code is{' '}
            <strong>
              <Spoiler text="KJBKEUBG" />
            </strong>
            .
          </p>
          <p>
            <button onClick={() => setShowPt2Solution(!showPt2Solution)}>
              {showPt2Solution ? 'Hide' : 'Reveal'} dots
            </button>
          </p>
          <DotDisplay
            dots={showPt2Solution ? pt2 : null}
            rowCount={maxY + 1}
            colCount={maxX + 1}
          />
        </div>
      }
    />
  );
};
interface DotDisplayProps {
  dots: Coords[] | null;
  rowCount: number;
  colCount: number;
}
function DotDisplay({
  dots,
  rowCount,
  colCount,
}: DotDisplayProps): JSX.Element {
  return (
    <table>
      <tbody>
        {Array.from({ length: rowCount }).map((_, y) => (
          <tr key={y}>
            {Array.from({ length: colCount }).map((_, x) => {
              const dot = dots?.find(d => d.x === x && d.y === y);
              return (
                <td
                  key={x}
                  style={{
                    background:
                      !dots || dot ? `var(${VarNames.TextPrimary})` : undefined,
                    height: '1rem',
                    width: '1rem',
                  }}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getStaticProps() {
  const file = getInputFile('day-13.txt');
  return {
    props: {
      input: file.contents,
    },
  };
}

export default DayThirteen;
