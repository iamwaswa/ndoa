import { CountdownContainer, GapText, TimeContainer } from './styles';

import Typography from '@material-ui/core/Typography';
import { useTimeToGo } from 'hooks/timeToGo';

interface ITimeProps {
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

function Gap(): JSX.Element {
  return <GapText>:</GapText>;
}

export function Countdown(): JSX.Element {
  const { days, hours, minutes, seconds } = useTimeToGo();

  return (
    <CountdownContainer>
      <Time title="Days" value={days} />
      <Gap />
      <Time title="Hours" value={hours} />
      <Gap />
      <Time title="Minutes" value={minutes} />
      <Gap />
      <Time title="Seconds" value={seconds} />
    </CountdownContainer>
  );
}
