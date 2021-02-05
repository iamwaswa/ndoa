import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

const TitleText = styled(Typography)`
  font-size: ${theme.typography.h3.fontSize};
  margin: ${theme.spacing()}px 0;

  ${theme.breakpoints.up(`sm`)} {
    font-size: ${theme.typography.h2.fontSize};
  }
`;

export function Names(): JSX.Element {
  return <TitleText>Waswa & Clare-Anne</TitleText>;
}
