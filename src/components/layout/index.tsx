import { Outlet } from 'react-router-dom';
import './styles.css';

export default function Layout() {
    return (
        <div className="pages-layout">
            <h1>Este é o Layout</h1>
            <Outlet />
        </div>
    );
}
