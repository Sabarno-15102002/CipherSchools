const bcrypt = require("bcrypt");
const User = require("../models/user");
const Joi = require("joi");
// const jwt = require('jsonwebtoken');
const { registerSchema, loginSchema } = require("../utils/userValidation");
const saltRounds = 10;

exports.registerUser = (req, res) => {
  const {
    fname,
    lname,
    email,
    password,
    phone,
    profile_pic,
    web,
    professional_info,
    interests,
    followers,
  } = req.body;
  console.log(req.body);
  const result = registerSchema.validate({ fname, lname, email, password });
  if (!result.error) {
    // Check for existing user
    User.findOne({ email: email }).then((user) => {
      if (user) return res.status(400).json("User already exists");

      //New User created
      const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        profile_pic: req.body.profile_pic,
        web: req.body.web,
        professional_info: req.body.professional_info,
        interests: req.body.interests,
        followers: req.body.followers,
      });

      //Password hashing
      bcrypt.genSalt(saltRounds, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          else {
            newUser.password = hash;
            // Save user
            newUser
              .save()
              .then(res.json("Registration Successful"))
              .catch((err) => console.log(err));
          }
        })
      );
    });
  } else {
    res.status(422).json(result.error.details[0].message);
  }
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // basic validation
  try {
    const result = loginSchema.validate({ email, password });
    if (!result.error) {
      //check for existing user
      User.findOne({ email: email }).then((user) => {
        if (!user) return res.status(400).json("Incorrect Email or Password");

        // Validate password
        bcrypt.compare(password, user.password).then((isMatch) => {
          console.log(isMatch);
          if (!isMatch) {
            return res.status(400).send("Incorrect Email or Password");
          }
          const token = user.generateAuthToken();
          let data = {
            token: token,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            facebook: user.web.facebook,
            github: user.web.github,
            instagram: user.web.instagram,
            twitter: user.web.twitter,
            linkedin: user.web.linkedin,
            website: user.web.website,
            currently_doing: user.professional_info.currently_doing,
            highest_education: user.professional_info.highest_education,
            interests: user.interests,
            followers: user.followers,
            message: "logged in successfully",
          };
          console.log(token);
          console.log("logged in successfully");
          res.status(200).send(JSON.stringify(data));
        });
      });
    } else {
      console.log(result.error);
      res.status(422).json(result.error.details[0].message);
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAccount = async (req, res, next) => {
  try {
    const id = req.body.id;
    const Account = await User.findOne({ _id: id });
    console.log(req.user);
    console.log(Account);
    res.status(201).json({
      success: true,
      message: "Found!",
      Account,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.editUserSocial = async (req, res) => {
  const { id, facebook, linkedIn, instagram, twitter, github, website } =
    req.body;
  try {
    const updatedResult = await User.findByIdAndUpdate(
      { _id: id },
      {
        web: {
          linkedin: linkedIn,
          github: github,
          facebook: facebook,
          twitter: twitter,
          instagram: instagram,
          website: website,
        },
      },
      {
        new: true,
      }
    );
    console.log(updatedResult);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.editUserProffesionalInfo = async (req, res) => {
  const { id, currentEducation, highestEducation } = req.body;
  try {
    const updatedResult = await User.findByIdAndUpdate(
      { _id: id },
      {
        professional_info: {
          highest_education: highestEducation,
          currently_doing: currentEducation,
        },
      },
      {
        new: true,
      }
    );
    console.log(updatedResult);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.editAbout = async (req, res) => {
  const { id, about } = req.body;
  try {
    const updatedResult = await User.findByIdAndUpdate(
      { _id: id },
      {
        about: about,
      },
      {
        new: true,
      }
    );
    console.log(updatedResult);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.editPassword = async (req, res) => {
  const { id, password } = req.body;
  try {
    // bcrypt.compare(password, password).then((isMatch) => {
    //   console.log(isMatch);
    //   if (!isMatch) {
    //     return res.status(400).send("Incorrect Email or Password");
    //   }
    //   const token = user.generateAuthToken();
    //   let data = {
    //     token: token,
    //     message: "password updated in successfully",
    //   };
    //   console.log(token);
    //   res.status(200).send(JSON.stringify(data));
    // });
    const updatedResult = await User.findByIdAndUpdate(
      { _id: id },
      {
        password: password,
      },
      {
        new: true,
      }
    );
    console.log(updatedResult);
  } catch (err) {
    res.status(400).send(err);
  }
};
