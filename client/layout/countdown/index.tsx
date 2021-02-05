import { CountdownContainer, GapText, TimeContainer, TimeText } from './styles';

import { useTimeToGo } from 'hooks/timeToGo';

interface ITimeProps {
  title: string;
  value: number;
}

function Time({ title, value }: ITimeProps): JSX.Element {
  return (
    <TimeContainer>
      <TimeText>{title}</TimeText>
      <TimeText>{String(value).padStart(2, `0`)}</TimeText>
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
