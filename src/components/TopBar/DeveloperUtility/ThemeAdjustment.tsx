import classNames from 'classnames';
import React from 'react';
import AdjustmentWrapper from './AdjustmentWrapper';
import useSettings from '../../../store/settingsStore';

const ThemeAdjustment = () => {
  const { setTheme, theme } = useSettings((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

  return (
    <AdjustmentWrapper title='Tema'>
      <div className='bg-gray-100 dark:bg-slate-500 dark:text-slate-200 p-1 rounded text-black w-32'>
        <div className='flex items-center relative'>
          <div
            className={classNames(
              'bg-white dark:bg-slate-400 absolute w-1/2 h-full z-auto rounded-md transition-transform transform',
              { 'translate-x-0': theme === 'light' },
              { 'translate-x-full': theme === 'dark' },
            )}
          ></div>
          <div
            className={classNames(
              'text-sm p-1 z-10 w-16 text-center cursor-pointer capitalize',
              { 'text-emerald-500 font-bold': theme === 'light' },
            )}
            onClick={() => setTheme('light')}
          >
            Terang
          </div>
          <div
            className={classNames(
              'text-sm p-1 z-10 w-16 text-center cursor-pointer capitalize',
              { 'text-emerald-200 font-bold': theme === 'dark' },
            )}
            onClick={() => setTheme('dark')}
          >
            Gelap
          </div>
        </div>
      </div>
    </AdjustmentWrapper>
  );
};

export default ThemeAdjustment;
