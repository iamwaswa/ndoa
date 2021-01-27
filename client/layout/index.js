import { Box } from 'grommet';
import { LoadingScreen } from './loadingScreen';
import { Navigation } from './navigation';
import { Title } from './title';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';

const Container = styled(Box)`
  background-image: url(https://assets.awwwards.com/awards/images/2015/04/pattern.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const PageContent = styled(Box)`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`;

export function Layout({ children }) {
  const atMost420px = useAtMostSize(420);

  return (
    <>
      <LoadingScreen />
      <Container direction="column">
        <Box
          direction="column"
          align="center"
          flex={{ grow: 0 }}
          justify="stretch"
          pad={{ vertical: `xsmall` }}
        >
          <Title mobile={atMost420px} />
          <Navigation mobile={atMost420px} />
        </Box>
        <PageContent flex={{ grow: 1 }} pad={{ top: `small` }}>
          {children}
        </PageContent>
      </Container>
    </>
  );
}
