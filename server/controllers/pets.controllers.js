const Pet = require('../models/pets.models')


const createPet = (req, res) => {
    Pet.create(req.body)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

const findPets = (req, res) => {
    Pet.find()
        .then(pet => res.status(200).json(pet))
        .catch(err => res.status(400).json(err))
}

const findOnePet = (req, res) => {
    const { id } = req.params;
    Pet.findById(id)
        .then(pet => res.status(200).json(pet))
        .catch(err => res.status(400).json(err))
}

const deletePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndDelete(id)
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}

const updatePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then(pet => res.status(201).json(pet))
        .catch(err => res.status(400).json(err))
}




module.exports = { createPet, findOnePet, findPets, updatePet, deletePet };