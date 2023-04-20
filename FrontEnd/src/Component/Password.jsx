import React from "react";
export default function Password()
{
    return <div className="password">
        <div className="row">
        <div className="col-6"><strong>PASSWORD & SECURITY</strong></div>
        <div className="col-6"><button className="btn btn-sm btn-yellow">Edit</button></div>
        <div className="link-div">
            <label>Password</label>
            <input type="password"/>
        </div>
       </div>
       <hr/>
    </div>
}