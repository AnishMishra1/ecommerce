const ErrorHandler = require("../utils/errorHandler")

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server is error";

    //Wrong MongoDb  Id error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid : ${err.path}`;
        err = new ErrorHandler(message,400);
    }

    //Mongoose duplicate key Error

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message,400);
    }

    //Wrong jwt token
    if(err.name === "JsonWebTokenError"){
        const message = "Invalid web token ,Try again";
        err = new ErrorHandler(message,400);
    }

    //JWT expire error
    if(err.name === "JsonWebTokenExpireError"){
        const message = "Web token is Expire ,Try again";
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message: err.message
    });

}
