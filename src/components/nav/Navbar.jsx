import "./Navbar.scss";

import navLogo from "../../assets/icon/nav-logo.webp";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="container navbar__box">
                <img src={navLogo} alt="navbar-logo" />
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/it-center-ohangaron" style={{ color: '#FFF' }}>
                            Study Abroad
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Test-centers" style={{ color: '#FFF' }}>
                        Test Centers
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/universities" style={{ color: '#FFF' }}>
                        Universities
                        </Link>
                    </li>
                    <li className="navbar__item" >
                        <Link to="/courses" style={{ color: '#FFF' }}>
                        Courses
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/FAQ" style={{ color: '#FFF' }}>
                        FAQ
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Contact" style={{ color: '#FFF' }}>
                        Contact
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Event" style={{ color: '#FFF' }}>
                        Event
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;