import React from "react";

function User(props) {
  return (
    <div className="userDetails">
      <h1>{props.firstName}</h1>
      <h1>{props.lastName}</h1>
      <small>{`Lives in ${props.country}`}</small>
    </div>
  );
}

export default User;
