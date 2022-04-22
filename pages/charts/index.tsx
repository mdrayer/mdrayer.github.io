import type { NextPage } from 'next';
import Link from 'next/link';
import BackLink from '../../source/components/BackLink';
import StyledUl from '../../source/components/StyledUl';
import PageTemplate from '../../source/layouts/PageTemplate';

const ChartsPage: NextPage = () => (
  <PageTemplate title="Charts and such">
    <StyledUl>
      <li>
        <Link href="/charts/radar-chart">Radar Chart Geometry Fun</Link>
      </li>
    </StyledUl>
    <BackLink href="/" />
  </PageTemplate>
);

export default ChartsPage;
