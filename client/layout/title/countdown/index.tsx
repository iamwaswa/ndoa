import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useAtMostSize } from 'hooks/atMostSize';
import { useTimeToGo } from 'hooks/timeToGo';

const TimeContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IMobileProps {
  mobile: boolean;
}

interface ITimeProps extends IMobileProps {
  title: string;
  value: number;
}

function Time({ title, value }: ITimeProps): JSX.Element {
  return (
    <TimeContainer>
      <Typography>{title}</Typography>
      <Typography>{String(value).padStart(2, `0`)}</Typography>
    </TimeContainer>
  );
}

function Gap({ mobile }: IMobileProps): JSX.Element {
  return <Typography>:</Typography>;
}

export function Countdown(): JSX.Element {
  const mobile = useAtMostSize(400);
  const { days, hours, minutes, seconds } = useTimeToGo();

  return (
    <Box>
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
