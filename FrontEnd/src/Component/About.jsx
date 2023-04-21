import axios from "axios";
import React, { useState } from "react";
export default function About() {
  const [about, setAbout] = useState("");
  const [isClicked, setClick] = useState("false");
  const [edit, setEdit] = useState("Edit");
  const token = localStorage.getItem("token");
  const claims = atob(token.split(".")[1]);
  const id = JSON.parse(claims)._id;
  function handleClick() {
    setClick(!isClicked);
    if (isClicked) {
      setEdit("Save");
    } else {
        axios.post("https://localhost:5000",{id,about}).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
      setEdit("Edit");
    }
  }
  return (
    <div className="about">
      <div className="row">
        <div className="col-6">
          <h3>About</h3>
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
      </div>
      <textarea
        rows={5}
        id="about"
        name="about"
        value={about}
        onChange={(e) => {
          setAbout(e.target.value);
        }}
      ></textarea>
      <hr />
    </div>
  );
}
