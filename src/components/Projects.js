import React, { Component } from "react";
import "./Projects.css";
class Projects extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <a
            href="http://ec2-18-218-194-75.us-east-2.compute.amazonaws.com:8080/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Expense App
          </a>
          <br></br>
          <a
            href="https://videos-hook-av8j1ohku.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Youtube API app
          </a>
          <br></br>
          <a
            href="https://lucid-edison-59ab51.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Image Search
          </a>
        </div>
      </div>
    );
  }
}
export default Projects;
