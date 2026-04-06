import { useState, useEffect } from 'react';

export const useIsShortScreen = (breakpoint: number = 600): boolean => {
  const [isShortScreen, setIsShortScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenHeight = (): void => {
      setIsShortScreen(window.innerHeight < breakpoint);
    };

    // Initial check
    checkScreenHeight();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenHeight);

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener('resize', checkScreenHeight);
    };
  }, [breakpoint]); // Re-run if breakpoint changes

  return isShortScreen;
};