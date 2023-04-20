import React from "react";

export default function IntroDiv()
{
    return <>
        <div className="intro-div">
        <div className='row info-intro'>
          <div className='col-3'>
          <img src="https://cdn.pixabay.com/photo/2018/04/06/22/26/fractalius-3297208_960_720.jpg" alt='Profile Pic'/>
          </div>
          <div className='col-9'>
          <p>Hello,</p>
          <h3>Your Name</h3>
          <p>youremail@gmail.com</p>
          </div>
        </div>
      </div>
    </>
}