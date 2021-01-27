import { Box, Text } from 'grommet';
import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

import Image from 'next/image';

const Screen = styled(Box)`
  background-color: var(--white);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: translateY(${({ show }) => (show ? `0` : `-100%`)});
  transition: all 500ms ease-in-out;
  z-index: 10;
`;

const pulse = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;

const Logo = styled(Image)`
  animation: 1s ${pulse} alternate forwards infinite ease-in-out;
`;

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Screen align="center" justify="center" show={show}>
      <Box direction="column">
        <Logo height={80} width={80} src="/logo.svg" />
        <Text margin={{ top: `small` }} size="xxlarge">
          Ndoa | Wedding
        </Text>
      </Box>
    </Screen>
  );
}
