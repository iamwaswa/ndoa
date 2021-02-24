import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const TitleText = styled(Typography)`
  ${({ theme }) => `
    font-family: var(--title-font);
    font-size: ${theme.typography.h4.fontSize};
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
