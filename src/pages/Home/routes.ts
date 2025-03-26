import { lazy } from 'react';

const Home = lazy(() => import('./hero'));

const homeRoutes = [{ path: '/home', component: Home }];

export default homeRoutes;
