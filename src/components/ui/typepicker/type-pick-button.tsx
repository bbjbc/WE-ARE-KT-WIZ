import { NavLink } from 'react-router-dom';

const TypePickButton = () => {
  return (
    <>
      <div className="mb-4 grid w-full grid-cols-3 gap-1 rounded-lg bg-gray-100 p-1 text-sm">
        <NavLink
          to="/players/coach"
          className={({ isActive }) =>
            isActive
              ? 'rounded-md bg-white py-1 text-center font-semibold text-black shadow-md'
              : 'rounded-md bg-gray-100 py-1 text-center text-gray-800'
          }
        >
          코칭스텝
        </NavLink>
        <NavLink
          to="/players/pitcher"
          className={({ isActive }) =>
            isActive
              ? 'rounded-md bg-white py-1 text-center font-semibold text-black shadow-md'
              : 'rounded-md bg-gray-100 py-1 text-center text-gray-800'
          }
        >
          투수
        </NavLink>
        <NavLink
          to="/players/batter"
          className={({ isActive }) =>
            isActive
              ? 'rounded-md bg-white py-1 text-center font-semibold text-black shadow-md'
              : 'rounded-md bg-gray-100 py-1 text-center text-gray-800'
          }
        >
          타자
        </NavLink>
      </div>
    </>
  );
};

export default TypePickButton;
