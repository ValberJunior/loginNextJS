import { useMediaQuery } from 'react-responsive';

export const useDeviceHandlers = () => {
  return {
    isDesktopOrLaptop: useMediaQuery({ minWidth: 1224 }),
    isBigScreen: useMediaQuery({ minWidth: 1824 }),
    isTabletOrMobile: useMediaQuery({ maxWidth: 1224 }),
    isTablet: useMediaQuery({ minWidth: 768, maxWidth: 1224 }),
    isMobile: useMediaQuery({ maxWidth: 767 }),
    isPortrait: useMediaQuery({ query: '(orientation: portrait)' }),
  };
};