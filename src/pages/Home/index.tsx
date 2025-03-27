import Hero from './hero';
import About from './about';
import './styles.css';

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <About />
        </div>
    );
}

export default Home;
