import React, { useState } from "react";
import Link from "./Link";
import axios from "axios";

export default function Social() {
  const [isClicked, setClick] = useState("false");
  const [edit, setEdit] = useState("Edit");
  // const [web, setWeb] = useState({
  //   linkedIn: "",
  //   github: "",
  //   facebook: "",
  //   twitter: "",
  //   instagram: "",
  //   website: "",
  // });
  const [facebook, setFacebook] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");
  const token = localStorage.getItem("token");
  const claims = atob(token.split(".")[1]);
  const id = JSON.parse(claims)._id;
  // console.log(id);
  function handleClick() {
    setClick(!isClicked);
    if (isClicked) {
      setEdit("Save");
    } else {
      // setWeb({
      //   linkedIn: linkedIn,
      //   github: github,
      //   facebook: facebook,
      //   twitter: twitter,
      //   instagram: instagram,
      //   website: website,
      // });
      // console.log(web);
      axios
        .post("http://localhost:5000/updatesocial", { id, facebook, linkedIn, instagram, twitter, github, website })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setEdit("Edit");
      // setWeb()
    }
  }
  return (
    <>
      <div className="social">
        <div className="row">
          <div className="col-6">
            <strong>ON THE WEB</strong>
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
        <div className="row link-div">
          <div className="link col-lg-6">
            <p>LinkedIn</p>
            <input
              type="text"
              id="linkedIn"
              name="linkedIn"
              value={linkedIn}
              placeholder="LinkedIn"
              onChange={(e) => {
                setLinkedIn(e.target.value);
              }}
            />
          </div>
          <div className="link col-lg-6">
            <p>Github</p>
            <input
              type="text"
              id="github"
              name="github"
              value={github}
              placeholder="Github"
              onChange={(e) => {
                setGithub(e.target.value);
              }}
            />
          </div>
          <div className="link col-lg-6">
            <p>Facebook</p>
            <input
              type="text"
              id="facebook"
              name="facebook"
              value={facebook}
              placeholder="Facebook"
              onChange={(e) => {
                setFacebook(e.target.value);
              }}
            />
          </div>
          <div className="link col-lg-6">
            <p>Instagram</p>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={instagram}
              placeholder="Instagram"
              onChange={(e) => {
                setInstagram(e.target.value);
              }}
            />
          </div>
          <div className="link col-lg-6">
            <p>Twitter</p>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={twitter}
              placeholder="Twitter"
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
          </div>
          <div className="link col-lg-6">
            <p>Website</p>
            <input
              type="text"
              id="website"
              name="website"
              value={website}
              placeholder="Website"
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
