import { Box, Nav, Text } from 'grommet';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';
import { useDaysToGo } from 'hooks/daysToGo';

const Container = styled(Box)`
  background-image: url(https://assets.awwwards.com/awards/images/2015/04/pattern.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Navigation = styled(Nav)`
  width: 100%;
`;

export function Layout({ children }) {
  const atMost420px = useAtMostSize(420);

  const daysToGo = useDaysToGo();

  return (
    <Container direction="column">
      <Box
        direction="column"
        align="center"
        flex={{ grow: 0 }}
        justify="stretch"
        pad={{ vertical: `xsmall` }}
      >
        <Image
          height={atMost420px ? `80` : `100`}
          width={atMost420px ? `80` : `150`}
          src="/logo.svg"
        />
        <Text margin={{ top: `small`, bottom: `medium` }} size="xxlarge">
          Waswa & Clare-Anne
        </Text>
        <Text margin={{ bottom: `xsmall` }} size="xlarge">
          April 24th, 2021
        </Text>
        <Text size="xlarge">{daysToGo}</Text>
        <Navigation
          direction="row"
          justify="center"
          gap={atMost420px ? `large` : `xlarge`}
          pad={{ top: `large` }}
        >
          <Link href="/">
            <Text size={atMost420px ? `medium` : `large`}>Home</Text>
          </Link>
          <Link href="/story">
            <Text size={atMost420px ? `medium` : `large`}>Story</Text>
          </Link>
          <Link href="/registry">
            <Text size={atMost420px ? `medium` : `large`}>Registry</Text>
          </Link>
          <Link href="/livestream">
            <Text size={atMost420px ? `medium` : `large`}>Livestream</Text>
          </Link>
        </Navigation>
      </Box>
      <Box flex={{ grow: 1 }}>{children}</Box>
    </Container>
  );
}
