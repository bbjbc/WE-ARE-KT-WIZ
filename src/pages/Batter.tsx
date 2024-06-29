import { Outlet, useLocation } from 'react-router-dom';

import PlayerGrid from '../components/player/player-grid';

const BatterPage = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/players/batter' && (
        <PlayerGrid category="타자" />
      )}
      <Outlet />
    </>
  );
};

export default BatterPage;
