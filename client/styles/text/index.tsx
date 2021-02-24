import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

export const Text = styled(Typography)`
  font-size: ${theme.typography.h5.fontSize};
  padding: ${theme.spacing(0, 0, 3, 0)};
  text-align: justify;
`;
