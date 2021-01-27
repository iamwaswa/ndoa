import { Box, Text } from 'grommet';

import { useAtMostSize } from 'hooks/atMostSize';
import { useTimeToGo } from 'hooks/timeToGo';

function Time({ mobile, title, value }) {
  return (
    <Box direction="column" align="center" gap="small">
      <Text size={`${mobile ? `` : `x`}large`}>{title}</Text>
      <Text size="xxlarge">{String(value).padStart(2, `0`)}</Text>
    </Box>
  );
}

function Gap({ mobile }) {
  return (
    <Text margin={{ horizontal: `${mobile ? `x` : ``}xsmall` }} size="xlarge">
      :
    </Text>
  );
}

export function Countdown() {
  const mobile = useAtMostSize(400);
  const { days, hours, minutes, seconds } = useTimeToGo();

  return (
    <Box direction="row" gap={mobile ? `xsmall` : `small`}>
      <Time mobile={mobile} title="Days" value={days} />
      <Gap mobile={mobile} />
      <Time mobile={mobile} title="Hours" value={hours} />
      <Gap mobile={mobile} />
      <Time mobile={mobile} title="Minutes" value={minutes} />
      <Gap mobile={mobile} />
      <Time mobile={mobile} title="Seconds" value={seconds} />
    </Box>
  );
}
