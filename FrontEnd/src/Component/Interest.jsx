import axios from "axios";
import React, { useState } from "react";
export default function Interest() {
    const [interest, setinterest] = useState("");
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
            axios.post("https://localhost:5000", { id, interest }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
            setEdit("Edit");
        }
    }
    return (
        <div className="interest">
            <div className="row">
                <div className="col-6">
                    <h3>interest</h3>
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
                id="interest"
                name="interest"
                value={interest}
                onChange={(e) => {
                    setinterest(e.target.value);
                }}
            ></textarea>
        </div>
    );
}