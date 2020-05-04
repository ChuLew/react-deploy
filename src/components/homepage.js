import React, {Component} from 'react';
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from './SideDrawer/SideDrawer';
import "./Homepage.css";
import Backdrop from './Backdrop/Backdrop';
class HomePage extends Component{

    state = {
        sideDrawerOpen: false,
      }
    
      drawerToggleClickHandler = () => {
        this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
      }
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
      render() {
        let backdrop
        let sideDrawer
    
        if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />
          sideDrawer = <SideDrawer />
        }
        return (
          <div style={{ height: '100%' }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            {sideDrawer}
            {backdrop}
            <main style={{ marginTop: '64px' }}>
              <p>This is the page content!</p>
            </main>
          </div>
        )
      }
}
export default HomePage;