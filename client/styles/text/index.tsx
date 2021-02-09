import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

export const Text = styled(Typography)`
  font-size: ${theme.typography.h6.fontSize};
  padding: ${theme.spacing(0, 2, 3, 2)};
  text-align: justify;
`;
