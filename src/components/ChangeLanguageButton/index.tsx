import { useTranslation } from 'react-i18next';
import brazilFlag from '../../assets/flags/brazil.png';
import usaFlag from '../../assets/flags/usa.png';
import './styles.css';

export default function ChangeLanguageButton() {
    const { i18n } = useTranslation();

    const handleClick = () => {
        const newLang = i18n.language === 'pt-BR' ? 'en' : 'pt-BR';
        i18n.changeLanguage(newLang);
    };

    return (
        <button onClick={handleClick} className="change-language-btn">
            {i18n.language === 'pt-BR' ? (
                <img
                    src={brazilFlag}
                    alt="Brazilian Flag"
                    className="flag-icon"
                />
            ) : (
                <img src={usaFlag} alt="USA Flag" className="flag-icon" />
            )}
        </button>
    );
}
