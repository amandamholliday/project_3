import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/pageone">
                    <li>Wall of Sticky Note Ideas</li>
                </Link>
                <Link style={navStyle} to="/pagetwo">
                    <li>Random Facts</li>
                </Link>
                <Link style={navStyle} to="/timer">
                    <li>Stopwatch</li>
                </Link>
            </ul>
        </nav>
    )
}

export default nav;