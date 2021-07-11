import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

const date = new Date();
const copyright = date.getFullYear();

const day = new Date();
const dd = String(day.getDate()).padStart(2, "0");
let mm = String(day.getMonth() + 1).padStart(2, "0");

// index.js

const welcome = "Welcome to 30 days of React";
const title = "Getting started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "MukhammadBobur",
  lastName: "Pakhriev",
};
// JSX element, header
const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>
        Date: {mm}.{dd}, {copyright}
      </small>
    </div>
  </header>
);

const user = (
  <div>
    <img
      className="user-image"
      src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/129722262_1282555542109238_207706672128706420_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ccIdkBmE5NUAX-a1rEd&_nc_oc=AQlDWUZnnyFvOmpJwqFUKaNpJpwJ6TNL4uhNCcUvWNP8O3YVDhzZgU0eyQhKQdga828&_nc_ht=scontent-ssn1-1.xx&oh=e05853ad9e140ac964a63a5a6d5ae2a4&oe=60EEB9D6"
      alt="bob's image"
    />
  </div>
);
const yearBorn = 1996;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li>{tech}</li>);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>

      {personAge}
    </div>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyright}</p>
    </div>
  </footer>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
    {user}
  </div>
);

ReactDOM.render(app, root);
