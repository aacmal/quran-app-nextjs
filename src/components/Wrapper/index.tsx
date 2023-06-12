import classNames from 'classnames';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
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
