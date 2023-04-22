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
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  var id = "";
  const [emailid, setEmail] = useState(email);
  const [url, setUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" || localStorage.getItem(img));
  const token = localStorage.getItem("token");

  if (token != null) {
    const claims = atob(token.split('.')[1])
    id = (JSON.parse(claims)._id);
    console.log(id);
  }

  function handleSubmit(e) {
    axios
      .post("http://localhost:5000/updateinfo", { id, fName, lName, emailid, img })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    closeForm();
  }
  return (
    <>
      <div className="intro-div">
        <div className="row info-intro">
          <div className="col-3">
            <img
              src={img}
              alt="Profile Pic"
              onClick={() => {
                openForm();
              }}
              style={{ cursor: "pointer" }}
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
              id="fname"
              placeholder="First Name"
              name="fname"
              onChange={(e) => {
                setFName(e.target.value);
              }}
              value={fName}
              required
            />
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => {
                setLName(e.target.value);
              }}
              value={lName}
              required
            />
            <input
              type="email"
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
            <input id="img" name="img" onChange={(e) => {
              setImg(JSON.stringify(e.target.value));
            }} type="file" />
            <button
              type="submit"
              className="btn btn-yellow"
              onClick={(e) => {
                handleSubmit(e);
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
