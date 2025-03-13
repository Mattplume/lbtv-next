import { useEffect, useState } from "react";

interface WindowSize {
  currentWidth: number | null;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    currentWidth: null, // 🛑 Commence à `null` pour éviter l'incohérence SSR/Client
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ currentWidth: window.innerWidth });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Déclenche l'update après le montage
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;

