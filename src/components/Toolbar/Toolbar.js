import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom';
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_navigation-items">
                <h1>Mitch Lew</h1>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;