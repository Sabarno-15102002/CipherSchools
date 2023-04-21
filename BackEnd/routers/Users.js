const express = require("express");
require('dotenv').config();
const router = express.Router();
const { registerUser, loginUser, getAccount, editUserSocial } = require("../controllers/AuthController");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/account", getAccount);

router.post("/updatesocial", editUserSocial);

module.exports = router;