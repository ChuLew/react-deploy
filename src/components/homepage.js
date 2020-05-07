import React, { Component } from 'react';
import "./Homepage.css";
import Typewriter from 'typewriter-effect';
import {Link} from 'react-router-dom';


class HomePage extends Component {

  render() {
    return (
        <div>
          <div className="center">
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
                  typewriter.typeString('Goal Oriented')
                  .pauseFor(100)
                  .deleteAll()
                  typewriter.typeString('Software Engineer')
                  .pauseFor(3000)
                  .deleteAll()
                  typewriter.typeString('Stay tuned...')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
            <div className = "social-links">
                {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mitch-lew-88b67b135/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="https://github.com/ChuLew" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Freecodecamp */}
            <Link to="MitchLewResume.docx" target="_blank" download>
              <i className="fa fa-file" aria-hidden="true"/>
            </Link>

            </div>
          </div>
    )
  }
}
export default HomePage;


