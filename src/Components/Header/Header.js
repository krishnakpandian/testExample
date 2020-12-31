import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <div class="header-container">
                <header>
                    <Link to="/"> Home </Link>
                    <Link to="/route">New Route</Link>
                </header>
            </div>
        </>
    )
}

export default Header;