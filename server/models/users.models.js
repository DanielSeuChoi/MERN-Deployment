const mongoose = require("mongoose");
const petSchema = require('../models/pets.models')
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: [true, "Please enter an email"],
            unique: [true, "You cannot use this email"],
        },
        password: { type: String, require: [true, "please enter a password"] },
        fullName: { type: String, require: [true, "please enter a name"] },

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
