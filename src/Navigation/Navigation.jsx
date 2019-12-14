import React from 'react';
import './Navigation.css';
import Link from './Link/Link.jsx';

function Navigation({ isLogged }) {

    return <nav className="Navigation">
        <ul>
            <Link to="/">BOARDS</Link>
            {!isLogged && <Link to="/login">LOGIN</Link>}
            {!isLogged && <Link to="/register">REGISTER</Link>}
            {isLogged && <Link to="/logout">LOGOUT</Link>}
        </ul>
    </nav>;

}

//<Link url="$">FanArt</Link>
//<Link to="$">FANART</Link>

export default Navigation; 