import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const TimeContainer = styled(Box)`
  ${({ theme }) => `
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

export const TimeText = styled(Typography)`
  font-family: var(--title-font);
`;

export const GapText = styled(TimeText)`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing(0.75)}px;
  `}
`;

export const CountdownContainer = styled(Box)`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: repeat(7, auto);
    grid-gap: ${theme.spacing()}px;

    ${theme.breakpoints.up(`sm`)} {
      grid-gap: ${theme.spacing(2)}px;
    }
  `}
`;
