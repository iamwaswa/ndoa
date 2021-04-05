import styled, { css } from 'styled-components';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export const TimeContainer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${theme.typography.h6.fontSize};

    ${theme.breakpoints.up(`sm`)} {
      font-size: ${theme.typography.h4.fontSize};
    }

    & > * {
      font-size: inherit;
    }
  `}
`;

export const ViewWeddingText = styled(Typography)`
  ${({ theme }) => css`
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-style: var(--title-font-style);
    font-size: ${theme.typography.body1.fontSize};
    font-weight: var(--title-font-weight);

    @media (min-width: 415px) {
      font-size: ${theme.typography.h5.fontSize};
    }

    @media (min-width: 485px) {
      font-size: ${theme.typography.h4.fontSize};
    }

    ${theme.breakpoints.up(`sm`)} {
      font-size: ${theme.typography.h3.fontSize};
    }
  `}
`;

export const TimeText = styled(Typography)`
  font-display: var(--title-font-display);
  font-family: var(--title-font-family);
  font-style: var(--title-font-style);
  font-weight: var(--title-font-weight);
  text-align: center;
`;

export const GapText = styled(TimeText)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing(0.75)}px;
  `}
`;

interface ICountdownContainerProps {
  weddingLive: boolean;
}

export const CountdownContainer = styled(Box)<ICountdownContainerProps>`
  ${({ theme, weddingLive }) => css`
    display: grid;
    grid-template-columns: repeat(${weddingLive ? 1 : 7}, auto);
    grid-gap: ${theme.spacing()}px;

    ${theme.breakpoints.up(`sm`)} {
      grid-gap: ${theme.spacing(2)}px;
    }
  `}
`;
