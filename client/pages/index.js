import { Box } from 'grommet';
import { Carousel } from 'components/carousel';
import Head from 'next/head';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';

const Container = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
`;

export default function HomePage({ title }) {
  const atMost420px = useAtMostSize(900);

  return (
    <>
      <Head>
        <title>{title} | Home</title>
      </Head>
      <Container
        margin={{
          bottom: atMost420px ? 0 : `medium`,
          horizontal: `auto`,
        }}
      >
        <Carousel
          images={Array(6).fill(
            `https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`
          )}
        />
      </Container>
    </>
  );
}
