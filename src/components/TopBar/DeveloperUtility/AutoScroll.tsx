'use client';

import React, { useEffect, useState } from 'react';
import AdjustmentWrapper from './AdjustmentWrapper';
import useSettings from '../../../store/settingsStore';
import { OptionButton } from './OptionList';

const AutoScroll = () => {
  const { autoScroll, setAutoScroll } = useSettings((state) => ({
    autoScroll: state.autoScroll,
    setAutoScroll: state.setAutoScroll,
  }));

  return (
    <AdjustmentWrapper title="Scroll Otomatis">
      <div className="bg-gray-100 dark:bg-slate-500 dark:text-slate-200 p-1 rounded text-black">
        <div className="flex items-center relative">
          <OptionButton
            onClick={() => setAutoScroll(false)}
            label="Matikan scroll otomatis"
            active={autoScroll === false}
          >
            Mati
          </OptionButton>
          <OptionButton
            onClick={() => setAutoScroll('word')}
            label="scroll otomatis per kata"
            active={autoScroll === 'word'}
          >
            Kata
          </OptionButton>
          <OptionButton
            onClick={() => setAutoScroll('verse')}
            label="scroll otomatis per ayah"
            active={autoScroll === 'verse'}
          >
            Ayah
          </OptionButton>
        </div>
      </div>
    </AdjustmentWrapper>
  );
};

export default AutoScroll;
