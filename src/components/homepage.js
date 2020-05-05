import React, {Component} from 'react';
import Toolbar from "./Toolbar/Toolbar";
import "./Homepage.css";
class HomePage extends Component{
      render() {
        return (
          <div style={{ height: '100%' }}>
            <Toolbar/>
            <main style={{ marginTop: '64px' }}>
                <div className = "center"><img src="https://i.imgur.com/kC1LcdT.png" alt="avatar" className="avatar-img" /></div>
            </main>
            
            <div id = "projects">
            Project section
           
            </div>
            <div id = "about" >
            About Section
            </div>
            <div id = "contact">
            Contact Section 
            </div>

          </div>
        )
      }
}
export default HomePage;