import { useMemo } from 'react';
import { useViewportWidth } from 'hooks/viewportWidth';

export function useAtMostSize(size: number): boolean {
  const width = useViewportWidth();

  return useMemo<boolean>(() => {
    return width === undefined ? false : width <= size;
  }, [size, width]);
}
