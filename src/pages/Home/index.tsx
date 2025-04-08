import { Link } from 'react-router-dom';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import backgroundImage from '../../assets/city.jpg';
import backgroundBuildings from '../../assets/cityBuildings.png';
import profilePicture from '../../assets/profile.jpg';
import star from '../../assets/star.png';
import './styles.css';

function Home() {
    return (
        <main className="pages-section home-page">
            {/* ========== Hero Section ==========*/}
            <section className="page-screen hero-section">
                <img className="hero-background-image" src={backgroundImage} />
                <img
                    className="hero-background-buildings"
                    src={backgroundBuildings}
                />
                <div className="hero-gradient"></div>
                <img className="star" src={star} />
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
            </section>
            {/* ========== About Section ==========*/}
            <section className="page-screen about-section">
                <div className="about-title row">
                    <img
                        className="about-profile-picture"
                        src={profilePicture}
                        alt="Profile Photo"
                    />
                    <div className="about-text col">
                        <h1>Sobre</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam ac viverra arcu. Duis volutpat lorem eu
                            tortor commodo, ut tempor libero sodales. Donec
                            tincidunt ultrices erat. Aliquam erat volutpat. In
                            hac habitasse platea dictumst. Vivamus mauris nulla,
                            vulputate eget ex tristique, mollis finibus libero.
                            Sed augue enim, aliquam et mauris non, porta
                            tincidunt lectus. Pellentesque vestibulum risus id
                            consequat finibus. Sed varius dignissim dui, eget
                            ornare diam sodales vel.
                            <br />
                            <br />
                            Donec nisl lacus, bibendum ut tellus et, rhoncus
                            maximus lacus. Vestibulum ullamcorper ac ex vitae
                            ultricies. Vestibulum sagittis id mauris nec
                            volutpat. Proin luctus ultrices egestas. Donec eget
                            pellentesque erat, fermentum vehicula sapien.
                            Quisque egestas mi vel justo ullamcorper
                            pellentesque. Integer sodales condimentum ipsum, nec
                            sagittis nisl ornare ac. Vestibulum auctor ut mi
                            aliquam hendrerit.
                        </p>
                    </div>
                </div>
                <div className="about-gallery">
                    <h1>GALLERY</h1>
                </div>
            </section>
        </main>
    );
}

export default Home;
