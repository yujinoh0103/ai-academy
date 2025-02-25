import { useEffect, useState } from "react";

export function useWindowSize() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      if (window.innerWidth < 360) {
        // alert("크기가 너무 작이요.");
        setIsSmall(true);
      }
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      document.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (isSmall) {
      alert("크기가 너무 작이요.");
    }
  }, [isSmall]);
}
