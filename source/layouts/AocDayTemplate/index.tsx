import Link from 'next/link';
import { ReactNode } from 'react';
import PageTemplate from '../PageTemplate';

interface AocDayTemplateProps {
  title: string;
  day: number;
  partOneTitle: string;
  partOneContent: ReactNode;
  partTwoTitle: string;
  partTwoContent: ReactNode;
}
function AocDayTemplate({
  partOneContent,
  partOneTitle,
  partTwoContent,
  partTwoTitle,
  title,
  day,
}: AocDayTemplateProps): JSX.Element {
  const dayStr = String(day);
  return (
    <PageTemplate title={title}>
      <p>
        See problem at{' '}
        <a
          href={`https://adventofcode.com/2021/day/${dayStr}`}
          rel="noreferrer"
          target="_blank"
        >
          adventofcode.com
        </a>
        .
      </p>
      <h3>Part One: {partOneTitle}</h3>
      {partOneContent}
      <h3>Part Two: {partTwoTitle}</h3>
      {partTwoContent}
      <p>
        <a
          href={`https://github.com/mdrayer/mdrayer.github.io/blob/main/source/helpers/day-${
            dayStr.length === 1 ? '0' + dayStr : dayStr
          }/util.ts`}
        >
          View the code.
        </a>
      </p>
      <Link href="/adventofcode2021">&larr; Back</Link>
    </PageTemplate>
  );
}

export default AocDayTemplate;
