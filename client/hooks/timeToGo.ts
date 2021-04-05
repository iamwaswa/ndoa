import { FunctionType, TimeToGo } from 'types';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimeToGo(): [TimeToGo, boolean] {
  const [weddingLive, setWeddingLive] = useState<boolean>(false);

  const weddingDateTime = useRef<number>(Date.UTC(2021, 3, 24, 18, 0, 0, 0));

  const dayInMilliseconds = useRef<number>(1000 * 60 * 60 * 24);

  const hourInMilliseconds = useRef<number>(1000 * 60 * 60);

  const minuteInMilliseconds = useRef<number>(1000 * 60);

  const secondInMilliseconds = useRef<number>(1000);

  const calculateTime = useCallback<FunctionType<void, TimeToGo>>(() => {
    const currentTime = Date.UTC(
      new Date().getUTCFullYear(),
      new Date().getUTCMonth(),
      new Date().getUTCDate(),
      new Date().getUTCHours(),
      new Date().getUTCMinutes(),
      new Date().getUTCSeconds(),
      new Date().getUTCMilliseconds()
    );

    const millisecondsToWedding = Math.max(
      0,
      weddingDateTime.current - currentTime
    );

    if (!millisecondsToWedding) {
      setWeddingLive(true);
    }

    return {
      days: Math.floor(millisecondsToWedding / dayInMilliseconds.current),
      hours: Math.floor(
        (millisecondsToWedding % dayInMilliseconds.current) /
          hourInMilliseconds.current
      ),
      minutes: Math.floor(
        (millisecondsToWedding % hourInMilliseconds.current) /
          minuteInMilliseconds.current
      ),
      seconds: Math.floor(
        (millisecondsToWedding % minuteInMilliseconds.current) /
          secondInMilliseconds.current
      ),
    };
  }, []);

  const [time, setTime] = useState<TimeToGo>(calculateTime());

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return (): void => {
      clearInterval(currentInterval);
    };
  }, [calculateTime]);

  return [time, weddingLive];
}
