import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

async function connectdb() {
    try {
        mongoose.connect(process.env.DATABASE_URL)
            .then(() => {
                console.log("Database connected");
            })
            .catch((err) => {
                console.log("Could not connect to database", err);
            })
    } catch (error) {
        console.log(error)
    }
}

export default connectdb;