import { Link } from "react-router-dom";

import './styles.css';

function Navbar(){
    return (
        <nav className="navbar main-nav">
            <Link to="/" className="nav-logo-text">
                <h4 className="text-primary">Github API</h4>
            </Link>
        </nav>
    );
}

export default Navbar;