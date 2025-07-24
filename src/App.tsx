import { Suspense } from 'react';
import AppRoutes from './routes/routes';
import './i18n/config';
import './App.css';

function App() {
    return (
        <Suspense fallback={<div>Loading translations...</div>}>
            <AppRoutes />
        </Suspense>
    );
}

export default App;
