import { useMemo } from 'react';
import { useViewportWidth } from '../viewportWidth';

export function useAtMostSize(size) {
  const width = useViewportWidth();

  return useMemo(() => {
    return width <= size;
  }, [size, width]);
}
