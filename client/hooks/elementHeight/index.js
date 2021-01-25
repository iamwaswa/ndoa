import { useEffect, useRef } from 'react';

export function useElementHeight(updateHeight) {
  const elementRef = useRef(null);

  useEffect(() => {
    function onHeightChanged() {
      updateHeight(elementRef?.current?.offsetHeight ?? undefined);
    }

    window.addEventListener(`load`, onHeightChanged);
    window.addEventListener(`resize`, onHeightChanged);

    return () => {
      window.removeEventListener(`load`, onHeightChanged);
      window.removeEventListener(`resize`, onHeightChanged);
    };
  }, []);

  return elementRef;
}
