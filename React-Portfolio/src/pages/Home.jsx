import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, my name is Leon</h2>
        <div className="content">
          <p>
            I'm a junior dev with a passion for learning and creating. I started
            my journy in web devoplement because tech facinates me and I have a
            strong interest in how tech works and is built.
          </p>
          <GitHubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
            <li className="item">
                <h2> Front-End</h2>
                <span>ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Handlebars</span>
            </li>
            <li className="item">
                <h2> Back-End</h2>
                <span>NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</span>
            </li>
            <li className="item">
                <h2> Languages</h2>
                <span>JavaScript</span>
            </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
