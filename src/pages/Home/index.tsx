import Hero from './hero';
import About from './about';
import './styles.css';

function Home() {
    return (
        <main className="home-page">
            <Hero />
            <About />
        </main>
    );
}

export default Home;
