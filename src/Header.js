import {NavLink} from 'react-router-dom';
import logo from './images/logo.png';

const Header = () => {
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink exact className="navbar-brand" to="/">
                            <img src={logo} alt="logo" className="img-responsive" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_menu" className="nav-link" to="/about">ABOUT</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_menu" className="nav-link" to="/services">SERVICES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_menu" className="nav-link" to="/portfolio">PORTFOLIO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active_menu" className="nav-link" to="/contact">CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;