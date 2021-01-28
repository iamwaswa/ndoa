import { Box } from 'grommet';
import styled from 'styled-components';

const TextPageContainer = styled(Box)`
  margin: 0 auto;
  max-width: 720px;
`;

export function TextPageWrapper({ children }) {
  return (
    <TextPageContainer
      align="center"
      direction="column"
      justify="center"
      pad={{ horizontal: `medium`, vertical: `small` }}
      gap="medium"
    >
      {children}
    </TextPageContainer>
  );
}
