import { useTranslation } from 'react-i18next';
import {
    IoLogoGithub,
    IoMail,
    IoLogoLinkedin,
    IoLogoWhatsapp,
} from 'react-icons/io5';
import './styles.css';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer id="contact" className="footer section-padding">
            <div>
                <h2 className="footer-title">{t('footer.title')}</h2>
                <p className="footer-description">{t('footer.description')}</p>
                <div className="footer-icons">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/YH1d3k12"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <IoLogoGithub size={24} />
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/yamamoto-hideki/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <IoLogoLinkedin size={24} />
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:djalmahy@hotmail.com"
                                aria-label="Email"
                            >
                                <IoMail size={24} />
                                djalmahy@hotmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://api.whatsapp.com/send?phone=5547996700158"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <IoLogoWhatsapp size={24} />
                                +55 47 99670-0158
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
