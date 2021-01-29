import { Box } from 'grommet';
import { ChildrenProps } from 'types';
import styled from 'styled-components';

const TextPageContainer = styled(Box)`
  margin: 0 auto;
  max-width: var(--max-width);
`;

export function TextPageWrapper({ children }: ChildrenProps): JSX.Element {
  return (
    <TextPageContainer
      align="center"
      direction="column"
      justify="center"
      pad={{ horizontal: `medium`, bottom: `medium` }}
      gap="medium"
    >
      {children}
    </TextPageContainer>
  );
}
