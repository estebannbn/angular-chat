import UserModel, {User} from "../models/user.model.js";
import logger from "../utils/logger.js";


export const createUserService = (input:Partial<User>) => {
    logger.info({input})
    return UserModel.create(input)
}