import { useEffect, useState } from "react";

export function useViewportWidth() {
  const [width, setWidth] = useState();

  useEffect(() => {
    function onWidthChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener(`load`, onWidthChange);
    window.addEventListener(`resize`, onWidthChange);

    return () => {
      window.removeEventListener(`load`, onWidthChange);
      window.removeEventListener(`resize`, onWidthChange);
    }
  }, [])

  return width;
}