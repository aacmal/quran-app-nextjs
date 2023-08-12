import IconWrapper from '@components/icons/IconWrapper';
import PauseSimpleIcon from '@components/icons/PauseSimpleIcon';
import PlaySimpleIcon from '@components/icons/PlaySimpleIcon';
import useQuranReader from '@stores/quranReaderStore';
import React from 'react';
import { shallow } from 'zustand/shallow';

type Props = {
  verseKey: string;
};

const HandlePlay = ({ verseKey }: Props) => {
  const { highlightedVerse } = useQuranReader(
    (state) => ({
      highlightedVerse: state.highlightedVerse,
    }),
    shallow
  );

  return (
    <IconWrapper
      aria-label={`Putar ayah ${verseKey}`}
      className="text-gray-500 dark:hover:text-gray-50"
    >
      {highlightedVerse === verseKey ? <PauseSimpleIcon /> : <PlaySimpleIcon />}
    </IconWrapper>
  );
};

export default HandlePlay;
