const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please Enter your Name"],
        maxLength:[30,"Nmae cannot exceed 30 charaters"],
        minLenght:[4,"Name should have more than 4 charater "]
    },
    email:{
        type:String,
        required:[true, "please enter your email id"],
        unique:true,
        validate:[validator.isEmail,"Please Enter valid Email id"]
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
        minLength:[8,"Password should be greater than 8 charaters"],
        select:false
    },
    avatar:{
        
          public_id:{
            type:String,
            required:true
            },
            url:{
            type:String,
            required:true
            }
        
    },

    role:{
       type: String,
       default: "user"
    },

    resetPasswordToken:String,
    resetPasswordExpire:Date


});


module.exports = mongoose.model("User",userSchema);