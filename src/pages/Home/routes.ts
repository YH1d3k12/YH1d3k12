import { lazy } from 'react';

const Home = lazy(() => import('./index'));

const homeRoutes = [{ path: '/', component: Home }];

export default homeRoutes;
