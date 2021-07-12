import React from "react";

function Main() {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li>{tech}</li>);
  const yearBorn = 1996;
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearBorn;
  const author = {
    firstName: "MukhammadBobur",
    lastName: "Pakhriev",
  };
  const personAge = (
    <p>
      {" "}
      {author.firstName} {author.lastName} is {age} years old
    </p>
  );

  return (
    <div>
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
    </div>
  );
}

export default Main;
