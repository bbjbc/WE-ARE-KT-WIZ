import { classNames } from '../../../utils/classNames';

interface TabProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabProps> = ({ isActive, label, onClick }) => {
  return (
    <button
      className={classNames(
        'rounded-md py-1 text-center',
        isActive
          ? 'bg-white font-semibold text-black shadow-md'
          : 'bg-gray-100 text-gray-800',
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
