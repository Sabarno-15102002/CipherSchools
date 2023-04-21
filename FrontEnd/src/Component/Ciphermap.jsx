import React from "react";
import Calendar from "react-github-contribution-calendar";

export default function Ciphermap() {
  var values = {};

  var until = "2023-06-30";
  var arr = document.getElementsByTagName("rect");
  console.log(arr.length);
  return <>
    <div className="cipher-map">
      <h3>Cipher Map</h3>
      <Calendar values={values} until={until} />
      <div className="more-less">
        <span>Less</span>
        <div className="streak"></div>
        <div className="streak" style={{ backgroundColor: "#f0c293" }}></div>
        <div className="streak" style={{ backgroundColor: "#f99a41" }}></div>
        <div className="streak" style={{ backgroundColor: "orangered" }}></div>
        <span>More</span>
      </div>
      <hr />

    </div>
  </>
}