import React from "react";

function Signup() {
    function nameHandler(e){
        console.log(e.target.value);
    }
  return (
    <>
      <h3>create account</h3>
      <br />
      <input
        type="text"
        placeholder="name"
        onChange={nameHandler}
      />
      <br />
      <input type="text" placeholder="email" />
      <br />
      <input type="text" placeholder="password" />
      <br />
      <br />
      <button>submit</button>
    </>
  );
}

export default Signup;
