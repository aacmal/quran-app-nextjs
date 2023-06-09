import classNames from 'classnames';
import Search from '../Search';
import DeveloperUtility from '../TopBar/DeveloperUtility/DeveloperUtility';

const Header = ({ className }) => {
  return (
    <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col px-5 xl:px-0">
      <div className="w-full flex justify-between lg:pr-5">
        <h1
          className={classNames(
            'text-xl font-bold text-emerald-500',
            className
          )}
        >
          Quran App
        </h1>
        <DeveloperUtility />
      </div>
      <Search className=" max-w-3xl" />
    </div>
  );
};

export default Header;
