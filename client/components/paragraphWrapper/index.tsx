import { Paragraph } from 'grommet';
import styled from 'styled-components';

const ParagraphContainer = styled(Paragraph)`
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

export function ParagraphWrapper({ children }): JSX.Element {
  return (
    <ParagraphContainer fill={true} textAlign="center">
      {children}
    </ParagraphContainer>
  );
}
