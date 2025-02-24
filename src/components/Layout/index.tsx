import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './styles.css';

export default function Layout() {
    return (
        <div className="pages-layout">
            <Navbar />
            <main className="pages-content">
                <div className="pages-section">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
