import React, { use, useState } from "react";

function Signup() {
    let [n,setN]=useState("test");
    let [E,setE]=useState("test@gmail.com");
    let [P,setP]=useState("test123");
  function nameHandler(e) {
    // console.log(e.target.value);
      setN(e.target.value);
  }
  return (
    <>
      <h3>create account</h3>
      <br />
      <input type="text" placeholder="name" onChange={nameHandler} />
      <br />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
        //   console.log(e.target);
        setE(e.target.value);
        }}
      />
      <br />
      <input type="text" placeholder="password" 
      onChange={e=>{
        setP(E.target.value);
      }}
      />
      <br />
      <br />
      <button>submit</button>
      <br />
      <div>
        <h4>name : {n}</h4>
        <h4>email : {E}</h4>
        <h4>password : {P}</h4>

      </div>
    </>
  );
}

export default Signup;
