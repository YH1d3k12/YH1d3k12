import processor from '../../assets/processor.svg';
import photo from '../../assets/photo.jpg';
import d20 from '../../assets/d20.svg';
import './styles.css';

export default function AboutSection() {
    return (
        <section className="about-section">
            <div className="about-section-text">
                <h1>I'm Djalma</h1>
                <h2>Fullstack Developer</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                </p>
                <p>Joinville, SC - Brazil</p>
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
