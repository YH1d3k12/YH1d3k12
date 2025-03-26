import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/city.jpg';
import './styles.css';

function Hero() {
    return (
        <div className="page-screen hero-page">
            <img className="hero-background-image" src={backgroundImage} />
            <div className="hero-gradient"></div>
            <div className="hero-title">
                <h1>Djalma Hideki Yamamoto</h1>
                <p>Fullstack Developer</p>
                <div className="hero-midia-links">
                    <Link to="https://github.com/YH1d3k12">
                        <IoLogoGithub />
                    </Link>
                    <Link to="https://br.linkedin.com/in/yamamoto-hideki">
                        <IoLogoLinkedin />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
