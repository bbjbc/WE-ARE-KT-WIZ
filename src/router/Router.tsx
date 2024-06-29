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

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/introduction', element: <IntroductionPage /> },
        { path: '/tickets', element: <TicketsPage /> },
        { path: '/cheer-squad', element: <CheerSquadPage /> },
        {
          path: '/players',
          element: <PlayersPage />,
          children: [
            { path: '/players/coach', element: <CoachPage /> },
            { path: '/players/pitcher', element: <PitcherPage /> },
            { path: '/players/batter', element: <BatterPage /> },
          ],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
