import sampleImg from '../../assets/ct.png';
import './styles.css';

function Home() {
    return (
        <main className="home-page page-padding">
            <section className="home-hero">
                <div className="home-hero-text">
                    <h1>I'm Djalma</h1>
                    <h2>Fullstack Developer</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div className="home-hero-img">
                    <img src={sampleImg} alt="" />
                </div>
            </section>
        </main>
    );
}

export default Home;
