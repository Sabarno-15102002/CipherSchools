import React from "react";
export default function Proffesional() {
  return (
    <div className="professional">
      <div className="row">
        <div className="col-6">
          <strong>PROFESSIONAL INFORMATION</strong>
        </div>
        <div className="col-6">
          <button className="btn btn-sm btn-yellow">Edit</button>
        </div>
        <div className="link-div row">
          <div className="col-lg-6">
            <label for="education">Highest education:</label>
            <br />
            <select name="education" id="education">
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="hs">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="col-lg-6">
            <label for="education">What do you do currently?</label>
            <br />
            <select name="education" id="education">
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
