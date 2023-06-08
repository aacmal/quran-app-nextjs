import ChaptersView from './ChaptersView';
// import JuzsView from './JuzsView';

const Chapters = ({ chapterLists }) => {
  return (
    <>
      <div className="grid gap-2 lg:gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2">
        <ChaptersView chapterData={chapterLists} />
      </div>
    </>
  );
};

export default Chapters;
