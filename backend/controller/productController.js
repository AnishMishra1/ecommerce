const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError")


//-----------CRUD OPERATION-------------------------//

//create product and make logic----Admin =>CREATE
exports.createProduct = catchAsyncErrors(async (req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});

//Get all product =>READ
exports.getAllProduct = catchAsyncErrors(async(req,res) => {

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
});


// Get Product Detail

exports.getProductDetails = catchAsyncErrors(async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    res.status(200).json({
        success:true,
        message:"Product found is successfully",
        product

    })
})

//Update the Product //=> UPDATE

exports.updateProduct = catchAsyncErrors(async (req,res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product
    })
    
})

//DELETE----product--------

exports.deleteProduct = catchAsyncErrors(async(req,res,next) => {
    const product =  await Product.findById(req.params.id);
     
    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product is deleted succesfully"
    })

})