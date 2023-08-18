require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); 


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
    return jwt.sign({id: this._id}, JWT_SECRET = "ddddddddss",{
        expiresIn: '24h',
    });
};

//Compare Password

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


//Genrating password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    
    //Generating Token

    const resetToken = crypto.randomBytes(20).toString("hex");

    //Hashing and adding resetPasswordToken to userSchema
    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");


    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
}



module.exports = mongoose.model("User",userSchema);