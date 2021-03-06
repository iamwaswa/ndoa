import styled, { css } from 'styled-components';

import Typography from '@material-ui/core/Typography';

const TitleText = styled(Typography)`
  ${({ theme }) => css`
    font-display: var(--title-font-display);
    font-family: var(--title-font-family);
    font-size: ${theme.typography.h4.fontSize};
    font-style: var(--title-font-style);
    font-weight: var(--title-font-weight);
    margin: ${theme.spacing()}px 0;

    @media (min-width: 415px) {
      font-size: ${theme.typography.h2.fontSize};
    }

    ${theme.breakpoints.up(`sm`)} {
      font-size: ${theme.typography.h1.fontSize};
    }
  `}
`;

export function Names(): JSX.Element {
  return <TitleText>Waswa & Clare-Anne</TitleText>;
}
