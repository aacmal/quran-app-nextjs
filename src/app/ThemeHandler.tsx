'use client';

import useSettings from '@stores/settingsStore';
import setTheme from '@utils/theme';
import React, { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

type Props = {};

const ThemeHandler = (props: Props) => {
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
  }, [theme]);

  return <></>;
};

export default ThemeHandler;
