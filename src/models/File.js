import {Schema, model} from "mongoose";


const uploadFile = new Schema({
    file: {
        type: String,
        required: true
    },

    userId: {
        type: String,
        required: true
    },


}, {timestamps: true})


export default model("uploadFile", uploadFile)