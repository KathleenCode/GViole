import {Schema, model} from "mongoose";

const expSchema = new Schema({
    suggest: {
        type: String,
    },

    opinion: {
        type: String,
    },

    experience: {
        type: String,
    },

    email: {
        type: String,
    },
    checked: {
        type:Boolean,
        default: true
    }
}, {timestamps: true});

const Exp = model('Experience', expSchema)

export default Exp;