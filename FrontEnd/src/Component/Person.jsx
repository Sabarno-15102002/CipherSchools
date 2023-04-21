import React, { useState } from "react";

export default function Person(props) {
    const [isClicked, setClick] = useState("false");
    const [text, setText] = useState("Follow")
    return <div className="person">
        <img src={props.img} alt="dp" className="person-dp" />
        <p>{props.name}</p>
        <p>{props.job}</p>
        <p>{props.follwers + " Followers"}</p>
        <button className={isClicked ? "btn-yellow btn btn-sm" : "btn-danger  btn btn-sm"} onClick={() => {
            setClick(!isClicked);
            if (isClicked) {
                setText("Unfollow");
            }
            else {
                setText("Follow")
            }
        }}>{text}</button>
    </div>
}