import {Schema, model} from "mongoose"
import {USER_ROLES} from "../config/constants.js";

const User = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    roles: {
        enum: Object.keys(USER_ROLES),
        type: String,
        required: true,
        default: "USER"
    },

})

export default  model('User', User)