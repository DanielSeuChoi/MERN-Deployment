const express = require("express")
const userRouter = express.Router();

const { createUser, findUser } = require('../controllers/users.controllers')

userRouter
    .route('/')
    .post(createUser)
    .get(findUser)
module.exports = userRouter
