import type { NextPage } from 'next';
import BackLink from '../../../source/components/BackLink';
import RadarChart from '../../../source/components/RadarChart';
import PageTemplate from '../../../source/layouts/PageTemplate';

const RadarChartPage: NextPage = () => {
  return (
    <PageTemplate>
      <h2 style={{ textAlign: 'center' }}>Radar Chart Geometry Fun</h2>
      <RadarChart />
      <BackLink href="/charts" />
    </PageTemplate>
  );
};

export default RadarChartPage;
