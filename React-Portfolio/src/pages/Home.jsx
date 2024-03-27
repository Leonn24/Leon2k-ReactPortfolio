import React from "react";
import AvatarImage from "../assets/images/theboy.jpg";
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
          <div className="box">
            <div className="image">
            <img src={AvatarImage} alt="Avatar" className="avatar" />
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
            <li className="item">
                <h2> Front-End</h2>
                <p>ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI, Handlebars</p>
            </li>
            <li className="item">
                <h2> Back-End</h2>
                <p>NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB</p>
            </li>
            <li className="item">
                <h2> Languages</h2>
                <p>JavaScript</p>
            </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
