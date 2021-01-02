import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/pageone">
                    <li>Page One</li>
                </Link>
                <Link style={navStyle} to="/pagetwo">
                    <li>Page Two</li>
                </Link>
            </ul>
        </nav>
    )
}

export default nav;