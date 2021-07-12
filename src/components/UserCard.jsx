import React from "react";

function UserCard() {
  return (
    <div className="userCard">
      <img
        className="user-image"
        src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-0/p526x296/129722262_1282555542109238_207706672128706420_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=ccIdkBmE5NUAX-a1rEd&_nc_oc=AQlDWUZnnyFvOmpJwqFUKaNpJpwJ6TNL4uhNCcUvWNP8O3YVDhzZgU0eyQhKQdga828&_nc_ht=scontent-ssn1-1.xx&oh=e05853ad9e140ac964a63a5a6d5ae2a4&oe=60EEB9D6"
        alt="bobimage"
      />
      <h1>MukhammadBobur Pakhriev </h1>
      <p>Software Engineer, South Korea</p>
      <h3>Skills</h3>
      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>SASS</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>ReactJS</span>
        <span>NodeJS</span>
        <span>MongoDB</span>
        <span>Python</span>
        <span>Git</span>
      </div>
      <p className="joined">©️ Joined July, 2021</p>
    </div>
  );
}

export default UserCard;
