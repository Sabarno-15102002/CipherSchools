import React from "react";
export default function Link(props)
{
    return <div className="link col-lg-6">
        <p>{props.socialAccount}</p>
        <input type="text" placeholder={"your "+props.socialAccount} />
    </div>
}