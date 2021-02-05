import { Box } from '@material-ui/core';
import { ChildrenProps } from 'types';
import styled from 'styled-components';
import { theme } from 'theme';

const TextPageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 ${theme.spacing()}px;
`;

export function TextPageWrapper({ children }: ChildrenProps): JSX.Element {
  return <TextPageContainer>{children}</TextPageContainer>;
}
