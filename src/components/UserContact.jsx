import React from "react";

function UserContact(props) {
  return (
    <div className="contacts">
      <p>{props.email}</p>
      <p>{props.phone}</p>
      <p>{props.linkedin}</p>
      <p>{props.github}</p>
    </div>
  );
}

export default UserContact;
