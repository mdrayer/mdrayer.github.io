import styled from '@emotion/styled';
import { CONSTRAIN, SPACING } from '../../config/theme';

const Main = styled('main')`
  margin-left: auto;
  margin-right: auto;
  max-width: ${CONSTRAIN.md};
  padding-left: ${SPACING[2]};
  padding-right: ${SPACING[2]};
`;

export default Main;
