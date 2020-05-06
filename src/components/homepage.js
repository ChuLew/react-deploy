import React, { Component } from 'react';
import "./Homepage.css";
import Typewriter from 'typewriter-effect';


class HomePage extends Component {

  render() {
    return (
      <div style={{ height: '100%' }}>
        <div class="container">
          <main style={{ marginTop: '58px' }}>
            <div id="wrapper"><img src="https://i.imgur.com/KG2V2xP.jpg?1" alt="introImage" /></div>
          </main>
          <div className="centered">
            <Typewriter options={{
                skipAddStyles: false,
                autoStart: true,
                loop: true,
              }}
              className = "Typewriter"
              onInit={(typewriter) => {
                  typewriter.typeString('Welcome!')
                  .pauseFor(1500)
                  .deleteAll()
                  typewriter.typeString('My Name is Mitch Lew')
                  .pauseFor(2500)
                  .deleteAll()
                  typewriter.typeString('Disciplined')
                  .pauseFor(100)
                  .deleteAll()
                  typewriter.typeString('Passionate')
                  .pauseFor(100)
                  .deleteAll()
                  typewriter.typeString('Soccer Player')
                  .pauseFor(100)
                  .deleteAll()
                  typewriter.typeString('Software Engineer')
                  .pauseFor(3000)
                  .deleteAll()
                  typewriter.typeString('Stay tuned...')
                  .pauseFor(1000)
                  .deleteAll()
                  typewriter.typeString("I'm just getting started")
                  .pauseFor(5000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

        </div>

      </div>
    )
  }
}
export default HomePage;


