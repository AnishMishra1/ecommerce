require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken") 


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


userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next();

    }

    this.password = await bcrypt.hash(this.password,10)
});


//JWT Token
userSchema.methods.getJWTToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE,
    });
};


module.exports = mongoose.model("User",userSchema);