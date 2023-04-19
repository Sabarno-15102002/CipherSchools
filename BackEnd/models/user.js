const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_pic: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
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
            required: true
        },
        currently_doing: {
            type: String,
            required: true
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