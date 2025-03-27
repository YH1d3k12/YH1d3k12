import profilePicture from '../../assets/profile.jpg';

function About() {
    return (
        <div className="page-screen about-page">
            <div className="about-title row">
                <img
                    className="about-profile-picture"
                    src={profilePicture}
                    alt="Profile Photo"
                />
                <div className="about-text col">
                    <h1>Sobre</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam ac viverra arcu. Duis volutpat lorem eu tortor
                        commodo, ut tempor libero sodales. Donec tincidunt
                        ultrices erat. Aliquam erat volutpat. In hac habitasse
                        platea dictumst. Vivamus mauris nulla, vulputate eget ex
                        tristique, mollis finibus libero. Sed augue enim,
                        aliquam et mauris non, porta tincidunt lectus.
                        Pellentesque vestibulum risus id consequat finibus. Sed
                        varius dignissim dui, eget ornare diam sodales vel.
                        <br />
                        <br />
                        Donec nisl lacus, bibendum ut tellus et, rhoncus maximus
                        lacus. Vestibulum ullamcorper ac ex vitae ultricies.
                        Vestibulum sagittis id mauris nec volutpat. Proin luctus
                        ultrices egestas. Donec eget pellentesque erat,
                        fermentum vehicula sapien. Quisque egestas mi vel justo
                        ullamcorper pellentesque. Integer sodales condimentum
                        ipsum, nec sagittis nisl ornare ac. Vestibulum auctor ut
                        mi aliquam hendrerit.
                    </p>
                </div>
            </div>
            <div className="about-gallery">
                <h1>GALLERY</h1>
            </div>
        </div>
    );
}

export default About;
