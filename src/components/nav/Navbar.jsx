import "./Navbar.scss";

import navLogo from "../../assets/icon/nav-logo.webp";
import navToogle from "../../assets/icon/nav-toogle.png";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="container navbar__box">
                <img src={navLogo} alt="navbar-logo" />
                <img className="navbar__toogle" src={navToogle} alt="" />
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/it-center-ohangaron" style={{ color: '#FFF' }}>
                            Study Abroad
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Test-centers" style={{ color: '#FFF' }}>
                        Test Centers
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item">
                        <Link to="/universities" style={{ color: '#FFF' }}>
                        Universities
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item" >
                        <Link to="/courses" style={{ color: '#FFF' }}>
                        Courses
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item">
                        <Link to="/FAQ" style={{ color: '#FFF' }}>
                        FAQ
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Contact" style={{ color: '#FFF' }}>
                        Contact
                        </Link>
                        <span></span>
                    </li>
                    <li className="navbar__item">
                        <Link to="/Event" style={{ color: '#FFF' }}>
                        Event
                        </Link>
                        <span></span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;