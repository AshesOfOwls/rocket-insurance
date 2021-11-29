import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { useRoutes /*, useParams*/ } from "react-router-dom";

import Layout from 'App/Layout';
import Home from 'routes/Home';

const routes: RouteObject[] = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/rating',
        element: <div>Rating Information</div>,
      },
    ]
  }
];

export { routes };

const RouterElement = () => {
  const routesElement = useRoutes(routes);

  return routesElement;
};

export default RouterElement;
