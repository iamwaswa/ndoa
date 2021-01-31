import { ChildrenProps } from 'types';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const ParagraphContainer = styled(Typography)`
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  text-align: center;
`;

export function ParagraphWrapper({ children }: ChildrenProps): JSX.Element {
  return <ParagraphContainer>{children}</ParagraphContainer>;
}
