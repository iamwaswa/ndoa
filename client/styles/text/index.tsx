import styled, { css } from 'styled-components';

import Typography from '@material-ui/core/Typography';

export const Text = styled(Typography)`
  ${({ theme }) => css`
    /* font-size: ${theme.typography.h5.fontSize}; */
    padding: ${theme.spacing(0, 0, 3, 0)};
    text-align: justify;
  `}
`;
