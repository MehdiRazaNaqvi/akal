import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import Metrics from './pages/ReferenceMetrics';
import StatePage from './pages/StatePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/akal',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/akal/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'metrics', element: <Metrics /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'state', element: <StatePage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },


    {
      path: '/akal/login',
      element: <LoginPage />,
    },


    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/akal/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },

    {
      path: '*',
      element: <Navigate to="/akal/404" replace />,
    },

  ]);

  return routes;
}
