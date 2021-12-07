import styled from '@emotion/styled';
import { CONSTRAIN, SPACING } from '../../config/theme';

const FooterWrapper = styled('footer')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${CONSTRAIN.md};
`;

const FooterInner = styled('div')`
  text-align: center;
  padding-left: ${SPACING[2]};
  padding-right: ${SPACING[2]};
`;

function Footer(): JSX.Element {
  return (
    <FooterWrapper>
      <hr />
      <FooterInner>
        <div>
          <a
            href="https://www.youtube.com/watch?v=Hm3JodBR-vs"
            rel="noreferrer"
            target="_blank"
          >
            Neat
          </a>
        </div>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
