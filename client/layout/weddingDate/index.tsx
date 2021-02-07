import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { theme } from 'theme';

const SubtitleText = styled(Typography)`
  font-family: var(--title-font);
  font-size: ${theme.typography.h4.fontSize};
  margin-bottom: ${theme.spacing()}px;
`;

export function WeddingDate(): JSX.Element {
  return <SubtitleText>April 24th, 2021</SubtitleText>;
}
