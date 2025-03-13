import React from "react";

function Profile({ name }) {
  return (
    <div className="profile-container">
      <h1>Hello, my name is {name}</h1>
      <button onClick={() => alert("Hello!")}>Click Me</button>
    </div>
  );
}

export default Profile;
