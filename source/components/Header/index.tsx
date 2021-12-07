import styled from '@emotion/styled';
import Link from 'next/link';
import { VarNames } from '../../config/theme';

const HeaderTitle = styled('h1')`
  text-align: center;
  a {
    color: var(${VarNames.TextPrimary});
  }
`;

function Header(): JSX.Element {
  return (
    <header>
      <HeaderTitle>
        <Link href="/">mdrayer.github.io</Link>
      </HeaderTitle>
    </header>
  );
}

export default Header;
