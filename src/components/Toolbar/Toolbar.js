import React from 'react';
import './Toolbar.css';
const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div className = "toolbar_navigation-items">
                <ul>
                    <li><a href = "#projects">Projects</a></li>
                    <li><a href = "#about">About</a></li>
                    <li><a href = "#contact">Contact</a></li>
                </ul>
            </div>
            <div className = "spacer"/>
            <div className = "toolbar_navigation-items">
                <ul>
                    <li><a href = "https://www.linkedin.com/in/mitch-lew-88b67b135/">Linkedin</a></li>
                    <li><a href = "https://github.com/ChuLew">Github</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;