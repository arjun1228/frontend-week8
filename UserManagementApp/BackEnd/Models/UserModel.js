import { Schema,model } from "mongoose";

//create user schema with validations

const userSchema = new Schema({
    name: {
        type:String,
        required:[true,"User name is rrquired"]
    },
    email : {
        type:String,
        required : [true,"Email is required"],
        unique: [true,"email is already existed"]
    },
    dateOfBirth : {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    mobileNumber : {
        type: Number,
        required : [true,"Mobile number is required"]
    },
    status: {
        type: Boolean,
        default: false
    }
},{
    strict: "throw",
    timestamps: true,
    versionKey: false
})

//create user model for user schema
export const UserModel = model('user',userSchema)