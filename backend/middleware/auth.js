const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken")
const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorHandler");


exports.isAuthenticatedUser = catchAsyncError(async(req,res, next) =>{
    const { token } = req.cookies;
    
    if(!token){
        return next(new ErrorHandler("Please login to acess this reasoure", 401));
    }
     const decodeData = jwt.verify(token, JWT_SECRET = "ddddddddss");

     req.user = await User.findById(decodeData.id);

     next();
})