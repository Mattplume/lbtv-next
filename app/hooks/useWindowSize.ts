import { useEffect, useState } from "react";

interface WindowSize {
  currentWidth: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    currentWidth: 768,
  });

  useEffect(() => {
      const handleResize = () => {
          setWindowSize({
            currentWidth: window.innerWidth,
          });
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Appel initial pour définir la taille

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;