import express, {Request, Response} from "express";
import SendEmail from '../utils/mailer.js'
import {validateResource} from "../middlewares/validateResource.js";
import {createUserSchema} from "../schema/user.schema.js";
import {createUser} from "../controllers/user.controller.js";

const router = express.Router()

// add routes
router.route('/auth')
    .post(validateResource(createUserSchema),createUser)

export default router