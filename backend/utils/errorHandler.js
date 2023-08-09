class ErrorHandler extends Error{
    constructor(messgae,statusCode){
        super(messgae);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = ErrorHandler;