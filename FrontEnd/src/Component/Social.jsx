import React, { useState } from "react";
import Link from "./Link";

export default function Social()
{
    const [isClicked,setClick]=useState("false");
    const [edit,setEdit]=useState("Edit");

    function handleClick()
    {
        setClick(!isClicked);
        if(isClicked)
        {
            setEdit("Save");
        }
        else{
            setEdit("Edit")
        }
    }
    return <>
       <div className="social">
       <div className="row">
        <div className="col-6"><strong>ON THE WEB</strong></div>
        <div className="col-6"><button className="btn btn-sm btn-yellow"  onClick={()=>{
            handleClick();
        }}>{edit}</button></div>
       </div>
       <div className="row link-div">
       <Link socialAccount="LinkedIn"/>
       <Link socialAccount="Github"/>
       <Link socialAccount="Facebook"/>
        <Link socialAccount="Twitter"/>
        <Link socialAccount="Instagram"/>
        <Link socialAccount="Website"/>
       </div>
       <hr/>
       </div>
    </>
}