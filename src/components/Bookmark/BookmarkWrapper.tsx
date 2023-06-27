import { BookmarkIcon } from '@components/icons';
import IconWrapper from '@components/icons/IconWrapper';
import TrashIcon from '@components/icons/TrashIcon';
import React from 'react';

type Props = {
  children: React.ReactNode;
  isEmpty: boolean;
  onClickDelete: () => void;
};

const BookmarkWrapper = ({ isEmpty, children, onClickDelete }: Props) => {
  return (
    <div className="px-5 xl:px-0 mb-5">
      <div className="h-fit w-full bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-lg lg:p-4 p-3">
        <div className="lg:mb-4 mb-2 flex justify-between items-center text-white">
          <div className="flex">
            <BookmarkIcon fill={true} className="h-6 mr-2" />
            <span className="font-bold">Bookmark</span>
          </div>
          <IconWrapper
            className={isEmpty && 'invisible'}
            onHover="none"
            onClick={onClickDelete}
          >
            <TrashIcon className="h-6 text-white" />
          </IconWrapper>
        </div>
        <div className="flex gap-2 flex-wrap">
          {isEmpty ? (
            <div className="flex justify-center w-full items-center text-white">
              <span className="font-semibold">Klik</span>
              <BookmarkIcon fill={true} className="h-5 mx-4" />
              <span className="font-semibold">untuk menambahkan</span>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default BookmarkWrapper;
