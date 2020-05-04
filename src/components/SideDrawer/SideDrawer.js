import React from 'react';
import './SideDrawer.css';
 
const sideDrawer = props =>{
    let drawerClasses = 'side-drawer'
    if (props.show) {
      drawerClasses = 'side-drawer open'
    }
    return(
        <nav className = {drawerClasses}>
            <ul>
                <li><a href = "https://www.linkedin.com/in/mitch-lew-88b67b135/">Linkedin</a></li>
                <li><a href = "https://github.com/ChuLew">Github</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;