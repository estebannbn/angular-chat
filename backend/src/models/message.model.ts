import {pre, prop, modelOptions, getModelForClass, index, Ref} from "@typegoose/typegoose";
import {User} from "./user.model.js";

@index({authorId:1})
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})

export class Message {
    @prop({required:true})
    text: string;

    @prop({ref: () => User})
    author: Ref<User>
}

const MessageModel = getModelForClass(Message)

export default MessageModel