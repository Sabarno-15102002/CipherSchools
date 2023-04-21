import React, { useState } from "react";
import axios from "axios";
export default function Navbar() {
  const token = localStorage.getItem("token");
  const claims = atob(token.split('.')[1])
  const id = JSON.parse(claims)._id;
  console.log(id);
  function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
    console.log("logged in");
    axios.post("http://localhost:5000/login", { email, password })
      .then((res) => {
        console.log(res);
        Object.keys(res.data).forEach(item => localStorage.setItem(item, res.data[item]));
        window.location = "/";
      }).catch((err) => {
        console.log(err);
      });
    setEmail('');
    setPassword('');
  }

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", { fname, lname, email, password, phone })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setFName('');
    setLName('');
    setEmail('');
    setPassword('');
    setPhone('');
  }

  const handleLogOut = () => {
    localStorage.clear();
    window.location = "/";
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span style={{ fontSize: "30px", cursor: "pointer" }} className="hamburger" onClick={() => openNav()}>&#9776; </span>
      <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" className="icon-cipher" alt="icon" />
      <a className="navbar-brand" href="/"><strong>CipherSchools</strong></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Browse
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">App Development</a>
              <a className="dropdown-item" href="#">Web Development</a>
              <a className="dropdown-item" href="#">Game Development</a>
              <a className="dropdown-item" href="#">Data Structures</a>
            </div>
          </li>
        </ul>
      </div>
      <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="profile" className="icon-cipher" />
      <i class="far fa-bell notification"></i>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => {
        if (token) {
          handleLogOut();
        }
        else {
          openForm();
        }
      }}>{token ? "Logout" : "Signup"}</button>
    </nav>
    <div className="loginPopup">
      <div className="formPopup" id="popupForm">
        <form encType="multipart/form-data" method="post" onSubmit={handleSubmitSignIn} className="formContainer">
          <h2>CipherSchools</h2>
          <p>Hey, Welcome!</p>
          <p>Please provide your email and password to signin</p>
          <input type="text" id="email" placeholder="Your Email" name="email" onChange={(e) => {
            setEmail(e.target.value);
          }} value={email} required />
          <input type="password" id="password" placeholder="Your Password" name="password" onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} required />
          <button type="submit" className="btn btn-yellow">Log in</button>
          <button type="button" className="btn cancel" onClick={() => {
            closeForm();
          }}>Close</button>
          <p>Don't have an account ?<button type="button" onClick={() => {
            document.getElementsByClassName("formContainer")[1].style.display = "block";
            document.getElementsByClassName("formContainer")[0].style.display = "none";
          }}>Get Started</button></p>
        </form>

        <form encType="multipart/form-data" method="post" onSubmit={handleSubmitSignUp} className="formContainer" style={{ display: "none" }}>
          <h2>CipherSchools</h2>
          <p>Create New Account</p>
          <p>Please provide your valid informations to signup</p>
          <input type="text" id="fname" placeholder="First Name" onChange={(e) => {
            setFName(e.target.value)
          }} value={fname} name="fname" required />
          <input type="text" id="lname" placeholder="Last Name" name="lname" onChange={(e) => {
            setLName(e.target.value)
          }} value={lname} required />
          <input type="text" id="email" placeholder=" Email Adress" name="email" onChange={(e) => {
            setEmail(e.target.value)
          }} value={email} required />
          <input type="text" id="phone" placeholder=" Phone (Optional)" name="phone" onChange={(e) => {
            setPhone(e.target.value)
          }} value={phone} />
          <input type="password" id="password" placeholder="Your Password" name="password" onChange={(e) => {
            setPassword(e.target.value)
          }} value={password} required />
          <button type="submit" className="btn btn-yellow">Signup</button>
          <button type="button" className="btn cancel" onClick={() => {
            closeForm();
          }}>Close</button>
          <p>Already have an account?<button type="button" onClick={() => {
            document.getElementsByClassName("formContainer")[0].style.display = "block";
            document.getElementsByClassName("formContainer")[1].style.display = "none";
          }}>Signin Now</button></p>
        </form>
      </div>
    </div>
  </>
}