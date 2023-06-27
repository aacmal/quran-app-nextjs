import React from 'react';
import AdjustmentWrapper from './AdjustmentWrapper';
import { shallow } from 'zustand/shallow';
import useSettings from '@stores/settingsStore';

type Props = {};

const Transliteration = (props: Props) => {
  const { transliteration, setTransliteration } = useSettings(
    (state) => ({
      transliteration: state.transliteration,
      setTransliteration: state.setTransliteration,
    }),
    shallow
  );

  return (
    <AdjustmentWrapper title="Transliterasi / Latin">
      <label
        htmlFor="default-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          defaultChecked={transliteration}
          type="checkbox"
          value=""
          id="default-toggle"
          className="sr-only peer"
        />
        <div
          onClick={() => setTransliteration(!transliteration)}
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-slate-500/50 rounded-full peer dark:bg-slate-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-emerald-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white dark:peer-checked:bg-emerald-100"
        ></div>
      </label>
    </AdjustmentWrapper>
  );
};

export default Transliteration;
