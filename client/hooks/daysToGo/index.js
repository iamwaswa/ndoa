import { useEffect, useMemo, useRef, useState } from 'react';

export function useDaysToGo() {
  const weddingDate = useRef(new Date(2021, 3, 24));

  const [daysToGo, setDaysToGo] = useState(() => {
    const timeDifferenceInMilliseconds =
      weddingDate.current.getTime() - new Date().getTime();
    return Math.ceil(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
  });

  const daysToGoText = useMemo(() => {
    return `day${daysToGo === 1 ? `` : `s`} to go!`;
  }, [daysToGo]);

  useEffect(() => {
    setTimeout(() => {
      setDaysToGo(() => {
        const timeDifferenceInMilliseconds =
          weddingDate.current.getTime() - new Date().getTime();
        return Math.ceil(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
      });
    }, 60000);
  }, []);

  return {
    daysToGo,
    daysToGoText,
  };
}
