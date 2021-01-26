import { Box } from 'grommet';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useAtMostSize } from '../hooks/atMostSize';

const Container = styled(Box)`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 900px;
`;

export default function HomePage() {
  const atMost420px = useAtMostSize(900);

  return (
    <Container
      margin={{
        top: `xsmall`,
        bottom: atMost420px ? 0 : `medium`,
        horizontal: `auto`,
      }}
      pad={{ vertical: `small` }}
    >
      <Head>
        <title>Home</title>
      </Head>
      <Image
        layout="fill"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1490723186985-6d7672633c86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
    </Container>
  );
}
