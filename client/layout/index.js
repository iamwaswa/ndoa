import { Box } from 'grommet';
import Link from 'next/link';

export function Layout({ children }) {
  return (
    <Box tag="main">
      <Box
        background="brand"
        direction="row"
        justify="between"
        pad={{ horizontal: `medium`, vertical: `small` }}
        tag="nav"
      >
        <Link href="/">
          <a>Icon here</a>
        </Link>
        <Box direction="row" gap="small" justify="between" tag="section">
          <Link href="/gift-registry">
            <a>Gift registry</a>
          </Link>
          <Link href="/live-stream">
            <a>Live stream</a>
          </Link>
        </Box>
      </Box>
      {children}
    </Box>
  );
}
