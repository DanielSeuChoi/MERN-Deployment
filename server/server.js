const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const dotenv = require('dotenv')
dotenv.config();

const connectDb = require("./config/mongoose.config")
connectDb();

const cors = require("cors")
app.use(cors());

const petRouter = require('./routes/pets.routes')
app.use('/api/pets', petRouter);

const userRouter = require('./routes/pets.routes')
app.use('/api/users', userRouter)

const PORT = process.env.port || 8000;
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`));