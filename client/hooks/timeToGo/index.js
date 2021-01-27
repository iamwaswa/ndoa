import { useCallback, useEffect, useRef, useState } from 'react';

export function useTimeToGo() {
  const weddingDate = useRef(new Date(2021, 3, 24, 11, 0, 0));

  const dayInMilliseconds = useRef(1000 * 60 * 60 * 24);

  const hourInMilliseconds = useRef(1000 * 60 * 60);

  const minuteInMilliseconds = useRef(1000 * 60);

  const secondInMilliseconds = useRef(1000);

  const calculateTime = useCallback(() => {
    const millisecondsToWedding =
      weddingDate.current.getTime() - new Date().getTime();

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

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => {
      clearInterval(currentInterval);
    };
  }, [calculateTime]);

  return time;
}
