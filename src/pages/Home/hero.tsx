import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import backgroundImage from '../../assets/city.jpg';
import backgroundBuildings from '../../assets/cityBuildings.png';
import star from '../../assets/star.png';
import cloud1 from '../../assets/cloud1.png';
import cloud2 from '../../assets/cloud2.png';
import cloud3 from '../../assets/cloud3.png';
import cloud4 from '../../assets/cloud4.png';
import './hero.css';

function Hero() {
    return (
        <section className="page-screen hero-section">
            <img className="hero-background-image" src={backgroundImage} />
            <img
                className="hero-background-buildings"
                src={backgroundBuildings}
            />
            <div className="hero-gradient"></div>
            <img id="cloud-1" className="clouds no-select" src={cloud1} />
            <img id="cloud-2" className="clouds no-select" src={cloud2} />
            <img id="cloud-3" className="clouds no-select" src={cloud3} />
            <img id="cloud-4" className="clouds no-select" src={cloud4} />
            <img id="cloud-5" className="clouds no-select" src={cloud2} />
            <img id="cloud-6" className="clouds no-select" src={cloud4} />
            <img id="star-1" className="star no-select" src={star} />
            <img id="star-2" className="star no-select" src={star} />
            <img id="star-3" className="star no-select" src={star} />
            <img id="star-4" className="star no-select" src={star} />
            <img id="star-5" className="star no-select" src={star} />
            <img id="star-6" className="star no-select" src={star} />
            <img id="star-7" className="star no-select" src={star} />
            <div className="subaru-cluster">
                <img id="star-alcyone" className="star no-select" src={star} />
                <img id="star-merope" className="star no-select" src={star} />
                <img id="star-atlas" className="star no-select" src={star} />
                <img id="star-pleione" className="star no-select" src={star} />
                <img id="star-electra" className="star no-select" src={star} />
                <img id="star-taygeta" className="star no-select" src={star} />
                <img id="star-caleano" className="star no-select" src={star} />
            </div>
            <div className="hero-title">
                <h1>
                    I'm <span>Djalma</span>
                </h1>
                <p>
                    a <span>Fullstack Developer</span>
                </p>
                {/* <div className="hero-midia-links">
                <Link to="https://github.com/YH1d3k12">
                    <IoLogoGithub />
                </Link>
                <Link to="https://br.linkedin.com/in/yamamoto-hideki">
                    <IoLogoLinkedin />
                </Link>
            </div> */}
            </div>
        </section>
    );
}

export default Hero;
