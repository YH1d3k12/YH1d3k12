import { useTranslation } from 'react-i18next';
import processor from '../../assets/processor.svg';
import photo from '../../assets/photo.jpg';
import d20 from '../../assets/d20.svg';
import './styles.css';

export default function AboutSection() {
    const { t } = useTranslation();

    return (
        <section id="about" className="about-section section-padding">
            <div className="about-section-text">
                <h1>{t('about.name')}</h1>
                <h2>{t('about.title')}</h2>
                <p>{t('about.description')}</p>
                <p>{t('about.location')}</p>
            </div>
            <div className="about-section-img">
                <img className="about-photo" src={photo} alt="" />
                <img id="d20" className="about-bg-icon" src={d20} alt="D20" />
                <img
                    id="processor"
                    className="about-bg-icon"
                    src={processor}
                    alt="Processor"
                />
            </div>
        </section>
    );
}
