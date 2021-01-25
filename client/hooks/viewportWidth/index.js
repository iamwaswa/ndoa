import { useEffect, useState } from 'react';

export function useViewportWidth() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    function onWindowWidthChange() {
      setViewportWidth(window.innerWidth);
    }

    window.addEventListener(`load`, onWindowWidthChange);
    window.addEventListener(`resize`, onWindowWidthChange);

    return () => {
      window.removeEventListener(`load`, onWindowWidthChange);
      window.removeEventListener(`resize`, onWindowWidthChange);
    };
  }, []);

  return viewportWidth;
}
