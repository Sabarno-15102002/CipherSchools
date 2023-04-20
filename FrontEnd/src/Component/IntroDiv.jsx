import React from "react";

export default function IntroDiv() {
  const fname = localStorage.getItem("fname") || "Name";
  const lname = localStorage.getItem("lname") || " ";
  const email = localStorage.getItem("email") || "youremail@gmail.com";
  return (<>
    <div className="intro-div">
      <div className='row info-intro'>
        <div className='col-3'>
          <img src="https://cdn.pixabay.com/photo/2018/04/06/22/26/fractalius-3297208_960_720.jpg" alt='Profile Pic' />
        </div>
        <div className='col-9'>
          <p>Hello,</p>
          <h3>{fname} {lname} </h3>
          <p>{email}</p>
        </div>
      </div>
    </div>
  </>);
}