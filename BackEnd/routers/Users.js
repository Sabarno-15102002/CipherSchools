const express = require("express");
require('dotenv').config();
const router = express.Router();
const { registerUser, loginUser, getAccount, editUserSocial, editUserProffesionalInfo, editAbout, editPassword } = require("../controllers/AuthController");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/account", getAccount);

router.post("/updatesocial", editUserSocial);

router.post("/updateproffesional", editUserProffesionalInfo);

router.post("/updateabout",editAbout);

router.post("/updatepassword",editPassword);

module.exports = router;