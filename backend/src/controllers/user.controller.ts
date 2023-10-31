import {Request, Response, NextFunction} from "express";
import {CreateUserInput} from "../schema/user.schema.js";
import {createUserService} from "../services/user.service.js";
import logger from "../utils/logger.js";

export const createUser = async(req:Request<{}, {},CreateUserInput>,res:Response)=>{
    try{
        const {passwordConfirmation} = req.body

        // es necesario que passwordConfirmation sea string | undefined para usar delete
        delete req.body.passwordConfirmation
        console.log({passwordConfirmation})
        logger.info('Creating user')
        const user = await createUserService(req.body)
        await user.save()
        logger.info('user created')
        res.status(201).json({user})
    }catch (error) {
        res.status(400).json({error})
    }
}