import { useState } from 'react';
import { Link } from 'react-router-dom';
import pathOptions from './pathOptions';
import './styles.css';

export default function Navbar() {
    const [activePath, setActivePath] = useState<string | null>(null);

    const handleOptionClick = (path: string) => {
        setActivePath(path);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar-link-container">
                <ul>
                    {pathOptions.map(option => (
                        <li key={option.path}>
                            <Link
                                to={option.path}
                                onClick={() => handleOptionClick(option.path)}
                                className={`navbar-link ${
                                    activePath === option.path ? 'active' : ''
                                }`}
                            >
                                {option.icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
