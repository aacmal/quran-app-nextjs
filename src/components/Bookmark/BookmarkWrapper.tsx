import { BookmarkIcon } from '@components/icons';
import IconWrapper from '@components/icons/IconWrapper';
import TrashIcon from '@components/icons/TrashIcon';
import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  isEmpty: boolean;
  onClickDelete: () => void;
  compact?: boolean;
};

const BookmarkWrapper = ({
  isEmpty,
  children,
  onClickDelete,
  compact = false,
}: Props) => {
  return (
    <div className={compact ? 'mb-5' : 'px-5 xl:px-0 mb-5'}>
      <section
        aria-labelledby={compact ? 'ayat-ditandai' : undefined}
        className={classNames(
          compact
            ? 'h-fit w-full rounded-xl border border-emerald-500/20 bg-white px-4 py-3 shadow-sm dark:border-emerald-400/20 dark:bg-slate-600'
            : 'h-fit w-full rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-600 p-3 lg:p-4'
        )}
      >
        <div
          className={classNames(
            compact
              ? 'mb-2 flex items-center justify-between text-slate-800 dark:text-slate-100 lg:mb-3'
              : 'mb-2 flex items-center justify-between text-white lg:mb-4'
          )}
        >
          <div className="flex items-center">
            <BookmarkIcon
              fill={true}
              className={compact ? 'mr-2 h-5' : 'h-6 mr-2'}
            />
            {compact ? (
              <h2 id="ayat-ditandai" className="m-0 text-base font-bold">
                Ayat yang ditandai
              </h2>
            ) : (
              <span className="font-bold">Bookmark</span>
            )}
          </div>
          <IconWrapper
            aria-label="Hapus semua ayat yang ditandai"
            className={isEmpty ? 'invisible' : undefined}
            onHover="none"
            onClick={onClickDelete}
          >
            <TrashIcon
              aria-hidden="true"
              className={
                compact
                  ? 'h-6 text-slate-500 dark:text-slate-200'
                  : 'h-6 text-white'
              }
            />
          </IconWrapper>
        </div>
        <div className={compact ? 'flex flex-wrap gap-2' : 'flex gap-2 flex-wrap'}>
          {isEmpty ? (
            compact ? (
              <p className="m-0 text-sm text-slate-500 dark:text-slate-300">
                Belum ada ayat yang ditandai.
              </p>
            ) : (
              <div className="flex w-full items-center justify-center text-white">
                <span className="font-semibold">Klik</span>
                <BookmarkIcon fill={true} className="mx-4 h-5" />
                <span className="font-semibold">untuk menambahkan</span>
              </div>
            )
          ) : (
            children
          )}
        </div>
      </section>
    </div>
  );
};

export default BookmarkWrapper;
