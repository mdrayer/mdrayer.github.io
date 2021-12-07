import styled from '@emotion/styled';

const HeaderTitle = styled('h1')`
  text-align: center;
`;

function Header(): JSX.Element {
  return (
    <header>
      <HeaderTitle>mdrayer.github.io</HeaderTitle>
    </header>
  );
}

export default Header;
