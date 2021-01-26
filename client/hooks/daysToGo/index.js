import { useEffect, useMemo, useState } from 'react';

export function useDaysToGo(interval = 60000) {
  const [daysToGo, setDaysToGo] = useState(calculateDaysToGo());

  useEffect(() => {
    const currentInterval = setInterval(() => {
      setDaysToGo(calculateDaysToGo());
    }, interval);

    return () => {
      clearInterval(currentInterval);
    };
  }, [interval]);

  return useMemo(() => {
    return `${daysToGo} day${daysToGo === 1 ? `` : `s`} to go!`;
  }, [daysToGo]);
}

const weddingDate = new Date(2021, 3, 24);

const dayInMilliseconds = 1000 * 60 * 60 * 24;

function calculateDaysToGo() {
  return Math.trunc(
    (weddingDate.getTime() - new Date().getTime()) / dayInMilliseconds + 1
  );
}
