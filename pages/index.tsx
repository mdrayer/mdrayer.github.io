import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Link from 'next/link';
import PageTemplate from '../source/layouts/PageTemplate';

const StyledUl = styled('ul')`
  list-style-type: square;
`;

const Home: NextPage = () => {
  return (
    <PageTemplate>
      <h2>Hello!</h2>
      <p>My name is Mike.</p>
      <h2>Projects</h2>
      <StyledUl>
        <li>
          <Link href="/adventofcode2021">Advent of Code 2021 solutions</Link>
        </li>
        <li>
          <a href="https://mdrayer.github.io/alexandria-floods/">
            Recent flood events in Alexandria, VA
          </a>{' '}
          (
          <a href="https://github.com/mdrayer/alexandria-floods">
            see the code
          </a>
          )
        </li>
        <li>
          <a href="https://mdrayer.github.io/clappify/">Clappify</a> (
          <a href="https://github.com/mdrayer/clappify">see the code</a>)
        </li>
      </StyledUl>
    </PageTemplate>
  );
};

export default Home;
