import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ChangeLanguageButton from '../ChangeLanguageButton';
import navbarOptions from './navbarOptions';
import './styles.css';

export default function Navbar() {
    const { t } = useTranslation();
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
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="navbar-title">Djalma Hideki Yamamoto</div>
                <div className="navbar-links">
                    {navbarOptions.map(option => (
                        <button
                            key={option.title}
                            className="navbar-link"
                            onClick={() => scrollToSection(option.path)}
                        >
                            {t(option.title)}
                        </button>
                    ))}
                    <ChangeLanguageButton />
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
                    }`}
                >
                    {navbarOptions.map(option => (
                        <li key={option.title}>
                            <button
                                onClick={() => scrollToSection(option.path)}
                            >
                                {option.icon}
                                {t(option.title)}
                            </button>
                        </li>
                    ))}
                    <ChangeLanguageButton />
                </ul>
            </nav>
        </header>
    );
}
