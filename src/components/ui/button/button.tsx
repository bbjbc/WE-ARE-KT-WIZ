import { classNames } from '../../../utils/classNames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames('px-2 py-1 transition duration-300', className)}
    >
      {children}
    </button>
  );
};

export default Button;
