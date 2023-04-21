import axios from "axios";
import React, { useState } from "react";

export default function IntroDiv() {
  function openForm() {
    document.getElementById("popupFormIntro").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupFormIntro").style.display = "none";
  }
  const fname = localStorage.getItem("fname") || "Login to view your name";
  const lname = localStorage.getItem("lname") || " ";
  const email = localStorage.getItem("email") || "Login to view your email";
  const [name, setName] = useState(fname + " "+lname);
  const [emailid, setEmail] = useState(email);
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const token = localStorage.getItem("token");
  const claims = atob(token.split(".")[1]);
  const id = JSON.parse(claims)._id;
  return (
    <>
      <div className="intro-div">
        <div className="row info-intro">
          <div className="col-3">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/06/22/26/fractalius-3297208_960_720.jpg"
              alt="Profile Pic"
              onClick={()=>{
                openForm();
              }}
            />
          </div>
          <div className="col-9">
            <p>Hello,</p>
            <h3>
              {fname} {lname}{" "}
            </h3>
            <p>{email}</p>
          </div>
        </div>
        <div className="loginPopupPassword">
          <div className="formPopup" id="popupFormIntro">
            <p>Update your Information</p>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              required
            />
            <input
              type="text"
              id="emailid"
              placeholder="Email"
              name="emailid"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={emailid}
              required
            />
             <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              required
            />
            <input type="file" />
            <button
              type="submit"
              className="btn btn-yellow"
              onClick={() => {
                axios
                  .post("https://localhost:5000/updatepassword", {
                    id,
                    name,
                    emailid,
                    url,
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Update
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => {
                closeForm();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
