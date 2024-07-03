import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import ErrorPage from '../pages/Error';
import IntroductionPage from '../pages/Introduction';
import PlayersPage from '../pages/Players';
import TicketsPage from '../pages/Tickets';
import CheerSquadPage from '../pages/CheerSquad';
import CoachPage from '../pages/Coach';
import PitcherPage from '../pages/Pitcher';
import BatterPage from '../pages/Batter';
import CatcherPage from '../pages/Catcher';
import InfielderPage from '../pages/Infielder';
import OutfielderPage from '../pages/Outfielder';
import SongPage from '../pages/Song';

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/introduction', element: <IntroductionPage /> },
        { path: '/tickets', element: <TicketsPage /> },
        { path: '/cheer-squad', element: <CheerSquadPage /> },
        { path: '/song', element: <SongPage /> },
        {
          path: '/players',
          element: <PlayersPage />,
          children: [
            { path: '/players/coach', element: <CoachPage /> },
            { path: '/players/pitcher', element: <PitcherPage /> },
            {
              path: '/players/batter',
              element: <BatterPage />,
              children: [
                { path: '/players/batter/catcher', element: <CatcherPage /> },
                {
                  path: '/players/batter/infielder',
                  element: <InfielderPage />,
                },
                {
                  path: '/players/batter/outfielder',
                  element: <OutfielderPage />,
                },
              ],
            },
          ],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
