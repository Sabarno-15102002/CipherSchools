import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Proffesional() {
  const [isClicked, setClick] = useState("false");
  const [edit, setEdit] = useState("Edit");
  const [currentEducation, setCurrentEducation] = useState("" || localStorage.getItem("currently_doing"));
  const [highestEducation, setHighestEducation] = useState("" || localStorage.getItem("highest_education"));
  const token = localStorage.getItem("token");
  const claims = atob(token.split(".")[1]);
  const id = JSON.parse(claims)._id;


  function handleClick() {
    setClick(!isClicked);
    if (isClicked) {
      setEdit("Save");
    } else {
      axios
        .post("http://localhost:5000/updateproffesional", { id, currentEducation, highestEducation })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setEdit("Edit");
    }
  }
  return (
    <div className="professional">
      <div className="row">
        <div className="col-6">
          <strong>PROFESSIONAL INFORMATION</strong>
        </div>
        <div className="col-6">
          <button className="btn btn-sm btn-yellow" onClick={() => {
            handleClick();
          }}>{edit}</button>
        </div>
        <div className="link-div row">
          <div className="col-lg-6">
            <label for="education">Highest education:</label>
            <br />
            <select name="highestEducation" onChange={(e) => {
              setHighestEducation(e.target.value);
            }} id="education">
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label for="education">What do you do currently?</label>
            <br />
            <select name="currentEducation" onChange={(e) => {
              setCurrentEducation(e.target.value);
            }} id="education">
              <option value="Schooling">Schooling</option>
              <option value="College">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
