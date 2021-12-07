import { NextPage } from 'next';
import NextLink from 'next/link';
import { SPACING } from '../../source/config/theme';
import PageTemplate from '../../source/layouts/PageTemplate';

const DAY_LINKS: string[] = [
  'Day 1: Sonar Sweep',
  'Day 2: Dive!',
  'Day 3: Binary Diagnostic',
  'Day 4: Giant Squid',
  'Day 5: Hydrothermal Venture',
  'Day 6: Lanternfish',
  'Day 7: The Treachery of Whales',
];

const AdventPage: NextPage = () => {
  return (
    <PageTemplate title="Advent of Code 2021">
      <p>
        Solutions for{' '}
        <a
          href="https://adventofcode.com/2021"
          rel="noreferrer"
          target="_blank"
        >
          Advent of Code 2021
        </a>
        .
      </p>
      <ol type="I" style={{ marginLeft: SPACING[2] }}>
        {DAY_LINKS.map((d, i) => (
          <li key={i}>
            <NextLink
              href={`/adventofcode2021/day-${String(i + 1).padStart(2, '0')}`}
            >
              {d}
            </NextLink>
          </li>
        ))}
      </ol>
    </PageTemplate>
  );
};

export default AdventPage;
