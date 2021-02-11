import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

const SubtitleText = styled(Typography)`
  font-family: var(--title-font);
  font-size: ${theme.typography.h5.fontSize};
  margin-bottom: ${theme.spacing()}px;

  ${theme.breakpoints.up(`sm`)} {
    font-size: ${theme.typography.h4.fontSize};
  }
`;

export function WeddingDate(): JSX.Element {
  return <SubtitleText>April 24th, 2021</SubtitleText>;
}
