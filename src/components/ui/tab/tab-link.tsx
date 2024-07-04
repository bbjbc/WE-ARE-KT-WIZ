import { NavLink } from 'react-router-dom';

interface TabNavProps {
  to: string;
  label: string;
}

const TabNav: React.FC<TabNavProps> = ({ to, label }) => {
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

export default TabNav;
