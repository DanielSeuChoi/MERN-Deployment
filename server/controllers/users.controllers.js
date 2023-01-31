const User = require('../models/users.models')


const createUser = (req, res) => {
    User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json(err))
}

const findUser = (req, res) => {
    User.find()
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json(err))
}




module.exports = { createUser, findUser };