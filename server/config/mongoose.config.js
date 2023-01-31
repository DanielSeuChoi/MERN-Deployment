const mongoose = require("mongoose");

const connectDb = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connected to the database"))
        .catch((err) => console.log("Something went wrong when connecting to the database ", err))
};

module.exports = connectDb;