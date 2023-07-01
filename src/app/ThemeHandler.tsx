'use client';

import useSettings from '@stores/settingsStore';
import setTheme from '@utils/theme';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

const ThemeHandler = () => {
  const pathname = usePathname();
  const { theme } = useSettings(
    (state) => ({
      theme: state.theme,
    }),
    shallow
  );

  useEffect(() => {
    if (theme) {
      setTheme(theme);
    }
    // update theme when pathname changes
  }, [theme, pathname]);

  return <></>;
};

export default ThemeHandler;
