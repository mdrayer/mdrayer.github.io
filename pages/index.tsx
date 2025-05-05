import type { NextPage } from 'next';
import Link from 'next/link';
import StyledUl from '../source/components/StyledUl';
import PageTemplate from '../source/layouts/PageTemplate';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <PageTemplate>
      <h2>Hello!</h2>
      <p>My name is Mike.</p>
      <h2>Projects</h2>
      <StyledUl>
        <ListItemLink
          href="https://mdrayer.github.io/alx-2024-candidate-tool/"
          label="Alexandria 2024 Candidate Tool"
          repoHref="https://github.com/mdrayer/alx-2024-candidate-tool"
        />
        <ListItemLink
          href="https://chapter-01-demo.vercel.app/"
          label="Simple Three.js Demo"
          repoHref="https://github.com/mdrayer/threejs-chapter-01-demo"
        />
        <ListItemLink href="/charts" label="Charts and such" />
        <ListItemLink
          href="/adventofcode2021"
          label="Advent of Code 2021 solutions"
        />
        <ListItemLink
          href="https://mdrayer.github.io/alexandria-floods/"
          label="Recent flood events in Alexandria, VA"
          repoHref="https://github.com/mdrayer/alexandria-floods"
        />
        <ListItemLink
          href="https://mdrayer.github.io/clappify/"
          label="Clappify"
          repoHref="https://github.com/mdrayer/clappify"
        />
      </StyledUl>
    </PageTemplate>
  );
};

const StyledSpan = styled('span')`
  column-gap: 0.5rem;
  display: flex;
`;

const SVG_ICON_SIZE = 18;
interface ListItemLinkProps {
  href: string;
  label: string;
  repoHref?: string;
}
function ListItemLink({
  href,
  label,
  repoHref,
}: ListItemLinkProps): JSX.Element {
  return (
    <li>
      <StyledSpan>
        <Link href={href}>{label}</Link>
        {repoHref && (
          <a className="logo" href={repoHref} title="See the code">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub logo"
              height={SVG_ICON_SIZE}
              width={SVG_ICON_SIZE}
              src="/github-mark.svg"
            />
          </a>
        )}
      </StyledSpan>
    </li>
  );
}

export default Home;
