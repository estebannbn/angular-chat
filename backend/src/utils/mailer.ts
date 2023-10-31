import nodemailer from 'nodemailer'
import logger from "./logger.js";

async function createTestCreds(){
    const creds = await nodemailer.createTestAccount()
    logger.info({creds})
}

createTestCreds()
async function sendEmail(){

}

export default sendEmail