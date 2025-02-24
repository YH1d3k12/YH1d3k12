import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
    return (
        <div className="page-screen home-page">
            <div className="home-background"></div>
            <div className="home-title">
                <h1>Djalma Hideki Yamamoto</h1>
                <p>Fullstack Developer</p>
                <div className="home-midia-links">
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

export default Home;
