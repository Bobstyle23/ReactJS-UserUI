import React from "react";

function UserInput() {
  return (
    <div className="user-input">
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <form action="">
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="text" placeholder="Last Name" />
        <input className="input" type="email" placeholder="Email" />
      </form>
      <button className="subscribe">Subscribe</button>
    </div>
  );
}

export default UserInput;
