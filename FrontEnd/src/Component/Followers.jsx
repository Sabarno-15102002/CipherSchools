import React from "react";
import followersArr from "./Follower";
import Person from "./Person";
export default function Follower() {
    return <>
        <p>Users Following you</p>
        <div className="holder row">
            {
                followersArr.map((x) => {

                    return <Person name={x.name} job={x.job} img={x.img} follower={x.followers} />
                })
            }
        </div>
    </>
}