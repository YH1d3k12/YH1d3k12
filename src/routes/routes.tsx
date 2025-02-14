import { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './lazyRoutes';
import Layout from '../components/layout';
// import LoadingPage from '../pages/Loading';
// import NotFoundPage from '../pages/NotFound';

interface RouteConfig {
    path: string;
    component: FC;
}

const LoadRoutes = (routes: RouteConfig[]) => {
    return routes.map((route, index) => (
        <Route key={index} path={route.path} element={<route.component />} />
    ));
};

export default function AppRoutes() {
    return (
        <BrowserRouter>
            {/* <Suspense fallback={<LoadingPage />}> </Suspense>*/}
            <Routes>
                <Route path="/" element={<Layout />}>
                    {LoadRoutes(routes)}
                    {/* <Route path="loading" element={<LoadingPage />} /> */}
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
