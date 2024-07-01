import { Outlet, useLocation } from 'react-router-dom';

import PlayerLayout from '../router/PlayerLayout';
import PlayerSchedule from '../components/player/player-schedule';
import Mascot from '../components/mascot/mascot';

const PlayersPage = () => {
  const location = useLocation();

  return (
    <>
      <PlayerLayout>
        <Outlet />
        {location.pathname === '/players' && (
          <>
            <Mascot />
            <PlayerSchedule />
          </>
        )}
      </PlayerLayout>
    </>
  );
};

export default PlayersPage;
