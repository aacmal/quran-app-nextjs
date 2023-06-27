'use client';

import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { AdjustmentIcon } from '../../icons';
import IconWrapper from '../../icons/IconWrapper';
import AutoScroll from './AutoScroll';
import { FontAdjustment, FontSizeAdjustment } from './FontAdjustment';
import ThemeAdjustment from './ThemeAdjustment';
import Transliteration from './Transliteration';

type DeveloperUtilityProps = {
  isInSurah?: boolean;
};

const DeveloperUtility = ({ isInSurah }: DeveloperUtilityProps) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="md:relative">
      <IconWrapper
        aria-label="Pengaturan"
        onClick={() => setExpanded(!isExpanded)}
        onHover="none"
        className="bg-emerald-400"
      >
        <AdjustmentIcon className="w-5 transform rotate-90 text-white" />
      </IconWrapper>
      <div
        className={classNames(
          'fixed md:absolute bottom-0 left-0 md:-left-1 md:-translate-x-80 md:bottom-auto md:top-0 w-full md:w-96 h-fit pb-16 pt-8 rounded-t-lg md:rounded-lg px-5 md:pb-6 md:pt-6 md:p-6 bg-white dark:bg-slate-700 gap-2 flex flex-col transform transition-all shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] shadow-emerald-400 dark:shadow-emerald-700 border-t md:border border-emerald-400',
          {
            'translate-y-0 md:opacity-100 md:translate-y-16 visible z-50':
              isExpanded,
          },
          {
            'translate-y-full md:opacity-0 md:translate-y-10 invisible':
              !isExpanded,
          }
        )}
      >
        <ThemeAdjustment />
        {/* <LanguageAdjustment /> */}
        {isInSurah && (
          <>
            <FontAdjustment />
            <FontSizeAdjustment />
            <AutoScroll />
            <Transliteration />
          </>
        )}
      </div>
    </div>
  );
};

export default DeveloperUtility;
