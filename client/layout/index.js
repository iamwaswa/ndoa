import { Box, Text } from 'grommet';
import { CircularAnchor, FlatAnchor } from './styles';

import Image from 'next/image';
import Link from 'next/link';
import { useElementHeight } from '../hooks/elementHeight';
import { useNavigationHeightContext } from '../context/navigationHeight';

export function Layout({ children }) {
  const { setNavigationHeight } = useNavigationHeightContext();

  const navigationRef = useElementHeight(setNavigationHeight);

  return (
    <Box tag="main">
      <Box
        align="center"
        background="brand"
        direction="row"
        justify="between"
        pad={{ horizontal: `medium`, vertical: `small` }}
        ref={navigationRef}
        tag="nav"
      >
        <Link href="/">
          <CircularAnchor>
            <Image height="40" width="40" src="/logo.svg" />
          </CircularAnchor>
        </Link>
        <Box direction="row" gap="small" justify="between" tag="section">
          <MainLink href="/gift-registry" text="Gift registry" />
          <MainLink href="/live-stream" text="Live stream" />
        </Box>
      </Box>
      {children}
    </Box>
  );
}

function MainLink({ href, text }) {
  return (
    <Link href={href}>
      <FlatAnchor tabIndex="0">
        <Text size="medium">{text}</Text>
      </FlatAnchor>
    </Link>
  );
}