const mongoose = require("mongoose");



const petSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            required: [true, "Please enter a pet name"],
            minLength: [3, "Pet name must be at least three characters"],
            unique: true,
        },
        petType: {
            type: String,
            required: [true, "Please enter a type"],
            minLength: [3, "The type, must be at least three characters"],
        },
        petInfo: {
            type: String,
            required: [true, "Please enter the pet's description"],
            minLength: [3, "Description must be at least three characters"],
        },
        skillOne: String,
        skillTwo: String,
        skillThree: String,
    },
    { timestamps: true }
);



const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

// <input value={playing}>
