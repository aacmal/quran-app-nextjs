import React from 'react';
import AdjustmentWrapper from './AdjustmentWrapper';
import { OptionButton } from './OptionList';
import useSettings from '@stores/settingsStore';

type Props = {};

const TranslationOption = (props: Props) => {
  const { translationMode, setTranslationMode } = useSettings((state) => ({
    translationMode: state.translationMode,
    setTranslationMode: state.setTranslationMode,
  }));

  return (
    <AdjustmentWrapper title="Jenis Terjemahan">
      <div className="bg-gray-100 dark:bg-slate-500 dark:text-slate-200 p-1 rounded text-black">
        <div className="flex items-center relative">
          <OptionButton
            onClick={() => setTranslationMode('word')}
            label="scroll otomatis per kata"
            active={translationMode === 'word'}
          >
            Kata
          </OptionButton>
          <OptionButton
            onClick={() => setTranslationMode('verse')}
            label="scroll otomatis per ayah"
            active={translationMode === 'verse'}
          >
            Ayah
          </OptionButton>
        </div>
      </div>
    </AdjustmentWrapper>
  );
};

export default TranslationOption;
