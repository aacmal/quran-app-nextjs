import classNames from 'classnames';

const Wrapper = ({ children, className }) => {
  return (
    <main
      className={classNames(
        'pt-5 max-w-screen-2xl mx-auto relative',
        className
      )}
    >
      {children}
    </main>
  );
};

export default Wrapper;
