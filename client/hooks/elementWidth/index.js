import { useEffect, useRef } from 'react';

export function useElementWidth(updateWidth) {
  const elementRef = useRef(null);

  useEffect(() => {
    function onWidthChanged() {
      updateWidth(elementRef?.current?.offsetWidth ?? undefined);
    }

    window.addEventListener(`load`, onWidthChanged);
    window.addEventListener(`resize`, onWidthChanged);

    return () => {
      window.removeEventListener(`load`, onWidthChanged);
      window.removeEventListener(`resize`, onWidthChanged);
    };
  }, []);

  return elementRef;
}
