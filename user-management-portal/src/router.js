import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
const Home = lazy(() => import('./Pages/Home'));
const Users = lazy(() => import('./Pages/Users'));

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'users',
				element: <Users />,
			},
		],
	},
]);

export default router;
