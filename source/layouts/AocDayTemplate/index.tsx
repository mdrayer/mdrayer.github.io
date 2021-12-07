import Link from 'next/link';
import { ReactNode } from 'react';
import PageTemplate from '../PageTemplate';

interface AocDayTemplateProps {
  title: string;
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
}: AocDayTemplateProps): JSX.Element {
  return (
    <PageTemplate title={title}>
      <h3>Part One: {partOneTitle}</h3>
      {partOneContent}
      <h3>Part Two: {partTwoTitle}</h3>
      {partTwoContent}
      <Link href="/adventofcode2021">Back</Link>
    </PageTemplate>
  );
}

export default AocDayTemplate;
