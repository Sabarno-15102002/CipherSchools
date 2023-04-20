import React from "react";
export default function About()
{
    return <div className="about">
    <div className="row">
        <div className="col-6"><h3>About</h3></div>
        <div className="col-6"><button className="btn btn-sm btn-yellow">Edit</button></div>
       </div>
    <textarea rows={5}></textarea>
    <hr/>
    </div>
}