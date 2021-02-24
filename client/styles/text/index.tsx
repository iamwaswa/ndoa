import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Text = styled(Typography)`
  ${({ theme }) => `
    font-size: ${theme.typography.h5.fontSize};
    padding: ${theme.spacing(0, 0, 3, 0)};
    text-align: justify;
  `}
`;
