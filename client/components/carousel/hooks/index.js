import { useCallback, useEffect, useRef, useState } from 'react';

export function useCarousel(total) {
  const interval = useRef();

  const [index, setIndex] = useState(0);

  const stopInterval = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  const startInterval = useCallback(() => {
    stopInterval();

    interval.current = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % total);
    }, 5000);
  }, [total, stopInterval]);

  const selectIndex = useCallback(
    (indexToSelect) => {
      return () => {
        stopInterval();
        setIndex(indexToSelect);
        startInterval();
      };
    },
    [stopInterval, startInterval]
  );

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return [index, selectIndex];
}
