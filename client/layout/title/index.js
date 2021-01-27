import { Box, Text } from 'grommet';

import { Countdown } from './countdown';
import Image from 'next/image';

export function Title({ mobile }) {
  return (
    <>
      <Image
        height={mobile ? `60` : `80`}
        width={mobile ? `60` : `80`}
        src="/logo.svg"
      />
      <Text margin={{ top: `small`, bottom: `medium` }} size="xxlarge">
        Waswa & Clare-Anne
      </Text>
      <Text margin={{ bottom: `xsmall` }} size="xlarge">
        April 24th, 2021
      </Text>
      <Box margin={{ top: `medium` }}>
        <Countdown />
      </Box>
    </>
  );
}
