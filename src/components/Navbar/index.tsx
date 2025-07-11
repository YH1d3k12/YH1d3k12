import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pathOptions from './pathOptions';
import './styles.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleResize = () => {
            if (window.innerWidth > 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="navbar-title">Djalma Hideki Yamamoto</div>
                <div className="navbar-links">
                    {pathOptions.map(option => (
                        <Link
                            key={option.title}
                            to={option.path}
                            className="navbar-link"
                        >
                            {option.title}
                        </Link>
                    ))}
                </div>
                <div className="navbar-burguer-container">
                    <input
                        type="checkbox"
                        id="menuToggle"
                        onClick={handleToggle}
                    />
                    <label htmlFor="menuToggle" className="navbar-burguer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul
                    className={`navbar-burguer-links ${
                        isMobileMenuOpen ? 'open' : ''
                    }
                    ${isScrolled ? 'scrolled' : ''}`}
                >
                    {pathOptions.map(option => (
                        <li key={option.title}>
                            <Link to={option.path}>{option.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
