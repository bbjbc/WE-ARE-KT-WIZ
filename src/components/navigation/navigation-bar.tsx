import { Link } from 'react-router-dom';

import DropdownMenu from './dropdown-menu';

const NavigationBar = () => {
  return (
    <div className="relative z-30 flex items-center justify-between bg-slate-950 bg-opacity-90 px-4 py-2 blur-none">
      <Link to="/">
        <h1 className="mx-2 px-2 font-extrabold text-white transition-all duration-200 hover:scale-105">
          KT WIZ
        </h1>
      </Link>
      <DropdownMenu />
    </div>
  );
};

export default NavigationBar;
