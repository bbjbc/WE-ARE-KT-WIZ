import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [{ path: '/', element: <Home /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
