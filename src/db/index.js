import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () =>{
    try {
        const connectionInstant = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`MongoDB connected ! DB host : ${connectionInstant.connection.host} `);

    } catch (error) {
        console.log("MongoDB Connection Error", error)
        process.exit(1)
    }

}
export default connectDB;