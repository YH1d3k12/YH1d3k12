import profilePicture from '../../assets/profile.jpg';

function About() {
    return (
        <section className="page-screen about-section">
            <img
                className="about-profile-picture"
                src={profilePicture}
                alt="Profile Photo"
            />
            <p className="about-text">
                I'm a passionate and driven [Your Profession, e.g., Web
                Developer, Graphic Designer, Software Engineer]. I’m always
                excited to take on new challenges and dive into creative
                solutions. With a solid foundation in [mention any relevant
                background or field], I specialize in crafting seamless and
                efficient experiences using the latest technologies. I enjoy
                blending technical expertise with a focus on user experience to
                deliver innovative projects.
            </p>
            <p className="about-text">
                Whether working independently or collaborating with teams, I
                strive to push the boundaries of what's possible. When I'm not
                coding/designing/creating, you'll find me exploring new trends,
                learning new skills, or enjoying [hobby or interest, e.g.,
                traveling, gaming, photography].
            </p>

            <div className="about-key-info">
                <h3>Key Information</h3>
                <ul>
                    <li>
                        <strong>Name:</strong> [Your Name]
                    </li>
                    <li>
                        <strong>Nationality:</strong> [Your Nationality]
                    </li>
                    <li>
                        <strong>Age:</strong> [Your Age] (optional)
                    </li>
                    <li>
                        <strong>Location:</strong> [City/Country]
                    </li>
                    <li>
                        <strong>Languages:</strong> [Languages spoken, if
                        relevant]
                    </li>
                    <li>
                        <strong>Current Role:</strong> [Your Current Job
                        Title/Occupation]
                    </li>
                    <li>
                        <strong>Education:</strong> [Your Educational
                        Background]
                    </li>
                    <li>
                        <strong>Experience:</strong> [Number of years in the
                        field or brief summary]
                    </li>
                </ul>
            </div>

            <div className="about-tech-list">
                <h3>Main Technologies I Use</h3>
                <ul>
                    <li>
                        <strong>Frontend:</strong> [React, Vue.js, Angular,
                        HTML5, CSS3, etc.]
                    </li>
                    <li>
                        <strong>Backend:</strong> [Node.js, Python, Java, PHP,
                        etc.]
                    </li>
                    <li>
                        <strong>Databases:</strong> [MySQL, MongoDB, PostgreSQL,
                        etc.]
                    </li>
                    <li>
                        <strong>Version Control:</strong> [Git, GitHub, GitLab,
                        etc.]
                    </li>
                    <li>
                        <strong>Design Tools:</strong> [Figma, Sketch, Adobe XD,
                        etc.]
                    </li>
                    <li>
                        <strong>Other:</strong> [Any other tech or tools you use
                        regularly]
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;
