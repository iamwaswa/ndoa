import { Box, Nav, Text } from 'grommet';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';

const Container = styled(Box)`
  background-image: url(https://assets.awwwards.com/awards/images/2015/04/pattern.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

const Words = styled(Text)`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ fontSize }) => fontSize};
`;

const Navigation = styled(Nav)`
  width: 100%;
`;

export function Layout({ children }) {
  const atMost420px = useAtMostSize(420);

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
        <Words fontSize="32px" margin={{ vertical: `small` }}>
          Waswa & Clare-Anne
        </Words>
        <Words fontSize="20px" margin={{ bottom: `xsmall` }}>
          April 24th, 2021
        </Words>
        <Words fontSize="20px">90 days to go!</Words>
        <Navigation
          direction="row"
          justify="center"
          gap={atMost420px ? `large` : `xlarge`}
          margin={{ top: `large` }}
          pad={{ bottom: `medium` }}
        >
          <Link href="/">
            <Words fontSize={atMost420px ? `16px` : `20px`}>Home</Words>
          </Link>
          <Link href="/story">
            <Words fontSize={atMost420px ? `16px` : `20px`}>Story</Words>
          </Link>
          <Link href="/registry">
            <Words fontSize={atMost420px ? `16px` : `20px`}>Registry</Words>
          </Link>
          <Link href="/livestream">
            <Words fontSize={atMost420px ? `16px` : `20px`}>Livestream</Words>
          </Link>
        </Navigation>
      </Box>
      <Box flex={{ grow: 1 }}>{children}</Box>
    </Container>
  );
}
