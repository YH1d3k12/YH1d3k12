import AboutSection from '../../components/AboutSection';
import ProjectSection from '../../components/ProjectSection';
import './styles.css';

function Home() {
    return (
        <main className="home-page">
            <AboutSection />
            <ProjectSection />
        </main>
    );
}

export default Home;
