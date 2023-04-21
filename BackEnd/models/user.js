const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    about: {
        type: String
    },
    profile_pic: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    phone: {
        type: String
    },
    web: {
        linkedin: {
            type: String
        },
        github: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        website: {
            type: String
        }
    },
    professional_info: {
        highest_education: {
            type: String,
        },
        currently_doing: {
            type: String,
        }
    },
    password: {
        type: String
    },
    interests: [
        {
            topics: {
                type: String
            }
        }
    ],
    followers: [
        {
            users: {
                type: String
            }
        }
    ]
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SESS_SECRET, { expiresIn: '7d' });
    return token;
}
const User = mongoose.model('User', userSchema);
module.exports = User;