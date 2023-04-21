import axios from "axios";
import React, { useState } from "react";
export default function Password() {
  const [isClicked, setClick] = useState(false);
  const [edit, setEdit] = useState("Edit")
  const [cpassword, setCPassword] = useState("");
  const [password, setPassword] = useState("");
  const [npassword, setNPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  function openForm() {
    document.getElementById("popupFormPassword").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupFormPassword").style.display = "none";
  }
  const token = localStorage.getItem("token");
  const claims = atob(token.split(".")[1]);
  const id = JSON.parse(claims)._id;
  function handleClick() {
    setClick(!isClicked);
    if (isClicked) {
      setEdit("Save");
      openForm();
    } else {
      setEdit("Edit");
    }
  }
  return (
    <div className="password">
      <div className="row">
        <div className="col-6">
          <strong>PASSWORD & SECURITY</strong>
        </div>
        <div className="col-6">
          <button
            className="btn btn-sm btn-yellow"
            onClick={() => {
              handleClick();
            }}
          >
            {edit}
          </button>
        </div>
        <div className="link-div">
          <label>Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <hr />
      <div className="loginPopupPassword">
        <div className="formPopup" id="popupFormPassword">
          <p>Update your password</p>
          <input
            type="password"
            id="cpassword"
            placeholder="Current Password"
            name="cpassword"
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
            value={cpassword}
            required
          />
          <input
            type="password"
            id="npassword"
            placeholder="New Password"
            name="npassword"
            onChange={(e) => {
              setNPassword(e.target.value);
            }}
            value={npassword}
            required
          />
          <input
            type="password"
            id="conpassword"
            placeholder="Confirm Password"
            name="conpassword"
            onChange={(e) => {
              setConPassword(e.target.value);
            }}
            value={conpassword}
            required
          />
          <button type="submit" className="btn btn-yellow" onClick={() => {
            axios
              .post("https://localhost:5000/updatepassword", { id, cpassword, npassword, conpassword })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}>
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
  );
}
