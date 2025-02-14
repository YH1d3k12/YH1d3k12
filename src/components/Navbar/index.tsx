import './styles.css';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <nav>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Projects</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
