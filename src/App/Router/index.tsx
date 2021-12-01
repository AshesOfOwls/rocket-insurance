import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import Layout from 'App/Layout';
import Home from 'routes/Home';
import RatingInformation from 'routes/RatingInformation';
import QuoteOverview from 'routes/QuoteOverview';

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
        element: <RatingInformation />,
      },
      {
        path: '/quotes/:quoteId',
        element: <QuoteOverview />,
      }
    ]
  }
];

export { routes };

const RouterElement = () => {
  const routesElement = useRoutes(routes);

  return routesElement;
};

export default RouterElement;
