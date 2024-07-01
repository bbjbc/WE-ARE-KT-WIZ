import { classNames } from '../../../utils/classNames';

interface CustomArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <div
      className={classNames(
        'absolute right-0 z-10 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-green-700 bg-opacity-40 transition-all duration-300 hover:bg-red-400',
        className,
      )}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <div
      className={classNames(
        'absolute left-0 z-10 ml-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-green-700 bg-opacity-40 transition-all duration-300 hover:bg-red-400',
        className,
      )}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
