import React from "react";

function Header() {
  const day = new Date();
  const dd = String(day.getDate()).padStart(2, "0");
  let mm = String(day.getMonth() + 1).padStart(2, "0");

  const date = new Date();
  const copyright = date.getFullYear();

  const welcome = "Welcome to 30 days of React";
  const title = "Getting started React";
  const subtitle = "JavaScript Library";
  const author = {
    firstName: "MukhammadBobur",
    lastName: "Pakhriev",
  };

  return (
    <div>
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
    </div>
  );
}

export default Header;
