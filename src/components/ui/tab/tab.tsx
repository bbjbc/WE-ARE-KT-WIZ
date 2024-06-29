import { NavLink } from 'react-router-dom';

interface TabProps {
  to: string;
  label: string;
}

const Tab: React.FC<TabProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'rounded-md bg-white py-1 text-center font-semibold text-black shadow-md'
          : 'rounded-md bg-gray-100 py-1 text-center text-gray-800'
      }
    >
      {label}
    </NavLink>
  );
};

export default Tab;
