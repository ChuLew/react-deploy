import React from 'react';
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div>
                <DrawerToggleButton click = {props.drawerClickHandler}/>
            </div>
            <div className = "toolbar_logo"><a href = "/">Mitch's Portfolio</a></div>
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