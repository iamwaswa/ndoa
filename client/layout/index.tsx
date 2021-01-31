import Box from '@material-ui/core/Box';
import { ChildrenProps } from 'types';
import { Navigation } from './navigation';
import { Title } from './title';
import styled from 'styled-components';
import { theme } from 'theme';
import { useAtMostSize } from 'hooks/atMostSize';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Top = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-grow: 0;
  padding: ${theme.spacing(2)}px ${theme.spacing()}px;
`;

const PageContent = styled(Box)`
  flex-grow: 1;
  margin: 0 auto;
  max-width: var(--max-width);
  padding-top: ${theme.spacing(2)}px;
  width: 100%;
`;

export function Layout({ children }: ChildrenProps): JSX.Element {
  const atMost420px = useAtMostSize(420);

  return (
    <Container>
      <Top>
        <Title mobile={atMost420px} />
        <Navigation mobile={atMost420px} />
      </Top>
      <PageContent>{children}</PageContent>
    </Container>
  );
}
