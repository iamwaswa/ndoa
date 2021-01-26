import { useMemo } from 'react';
import { useViewportWidth } from 'hooks/viewportWidth';

export function useAtMostSize(size) {
  const width = useViewportWidth();

  return useMemo(() => {
    return width <= size;
  }, [size, width]);
}
