import styled, { css } from 'styled-components';

import Box from '@material-ui/core/Box';

export const LayoutContainer = styled(Box)`
  color: var(--gold);
  display: flex;
  flex-direction: column;
`;

export const LayoutHeader = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    flex-grow: 0;
    padding: ${theme.spacing(1, 2)};
  `}
`;

export const LayoutMiddleContainer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.spacing()}px 0;
  `}
`;

export const LayoutContent = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: ${theme.spacing()}px auto 0;
    max-width: var(--max-width);
    width: 100%;
  `}
`;
