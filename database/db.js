import mongoose from "mongoose";    
import dotenv from 'dotenv';
dotenv.config();


const dbConnection = async () => {
    const MONGODB_URL = process.env.MONGODB_URL
    try {
        await mongoose.connect(MONGODB_URL , { useNewUrlParser : true });
        console.log('Mongodb connected successfully')
    } catch (error) {
        console.error('Error while connecting with the database' , error.message)
    }
}

export default dbConnection;