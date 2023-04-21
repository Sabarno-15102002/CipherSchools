import axios from "axios";
import React, { useState } from "react";
export default function Password()
{
    const [password, setPassword] = useState("");
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
        axios.post("https://localhost:5000",{id,password}).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
      setEdit("Edit");
    }
  }
    return <div className="password">
        <div className="row">
        <div className="col-6"><strong>PASSWORD & SECURITY</strong></div>
        <div className="col-6"><button className="btn btn-sm btn-yellow" onClick={()=>{
            handleClick();
        }}>{edit}</button></div>
        <div className="link-div">
            <label>Password</label>
            <input type="password" id="password" value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
        </div>
       </div>
       <hr/>
    </div>
}