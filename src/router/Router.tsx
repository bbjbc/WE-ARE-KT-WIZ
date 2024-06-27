import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import ErrorPage from '../pages/Error';
import IntroductionPage from '../pages/Introduction';
import PlayersPage from '../pages/Players';
import TicketsPage from '../pages/Tickets';
import CheerSquadPage from '../pages/CheerSquad';

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/introduction', element: <IntroductionPage /> },
        { path: '/players', element: <PlayersPage /> },
        { path: '/tickets', element: <TicketsPage /> },
        { path: '/cheer-squad', element: <CheerSquadPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
