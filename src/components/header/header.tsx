import { classNames } from '../../utils/classNames';

interface HeaderProps {
  bgImage: string;
  title: string;
  description: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  bgImage,
  title,
  description,
  className,
}) => {
  return (
    <header className="relative w-full">
      <img
        src={bgImage}
        alt="kt wiz"
        className="absolute z-0 h-full w-full object-cover object-top"
      />
      <div
        className={classNames(
          'relative z-10 flex flex-col items-center justify-center gap-2 p-8',
          className || '',
        )}
      >
        <h1 className="flex justify-center text-lg font-extrabold text-black">
          {title}
        </h1>
        <p
          className="text-xs font-semibold"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </header>
  );
};

export default Header;
