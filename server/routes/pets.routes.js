const express = require("express")
const petRouter = express.Router();

const { findOnePet, findPets, createPet, updatePet, deletePet } = require('../controllers/pets.controllers')



petRouter
    .route('/')
    .get(findPets)
    .post(createPet)




petRouter
    .route('/:id')
    .get(findOnePet)
    .delete(deletePet)
    .put(updatePet)

module.exports = petRouter