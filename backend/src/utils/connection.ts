import mongoose from 'mongoose'
import logger from "./logger.js";

export default async function (){
    try{
        await mongoose.connect('mongodb://localhost:27017/chatdatabase')
        logger.info('connected to database')
    }catch (e) {
        logger.error('Error connecting to database')
    }
}