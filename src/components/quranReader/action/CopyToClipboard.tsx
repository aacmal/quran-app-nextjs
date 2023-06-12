'use client';

import React from 'react';
import { CopyIcon } from '../../icons';
import IconWrapper from '../../icons/IconWrapper';

type CopyToClipboardProps = {
  text_uthmani: string;
};

const CopyToClipboard = ({ text_uthmani }: CopyToClipboardProps) => {
  function copyToClipboard(content: string) {
    navigator.clipboard.writeText(content);
  }

  return (
    <IconWrapper
      aria-label="Salin ayat ini ke clipboard"
      className="text-gray-500 dark:hover:text-gray-50 group cursor-pointer"
    >
      <CopyIcon
        onClick={() => copyToClipboard(text_uthmani)}
        className="md:h-6 h-5 group-active:text-emerald-500"
      />
    </IconWrapper>
  );
};

export default CopyToClipboard;
