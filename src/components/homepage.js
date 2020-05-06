import React, {Component} from 'react';
import "./Homepage.css";
class HomePage extends Component{
      render() {
        return (
          <div style={{ height: '100%' }}>
            <div class="container">
            <main style={{ marginTop: '58px' }}>
                <div id ="wrapper"><img src="https://i.imgur.com/KG2V2xP.jpg?1" alt="introImage" /></div>
            </main>
            <div className = "centered"><h1>Hello, I'm Mitch Lew</h1></div>
            
            </div>
            
          </div>
        )
      }
}
export default HomePage;