const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");


//-----------CRUD OPERATION-------------------------//

//create product and make logic----Admin =>CREATE
exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

//Get all product =>READ
exports.getAllProduct = async(req,res) => {

    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    })
}


// Get Product Detail

exports.getProductDetails = async (req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404))
    }

    res.status(200).json({
        success:true,
        message:"Product found is successfully",
        product

    })
}

//Update the Product //=> UPDATE

exports.updateProduct = async (req,res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product Not in list"

        })
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



}

//DELETE----product--------

exports.deleteProduct = async(req,res,next) => {
    const product =  await Product.findById(req.params.id);
     
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success:true,
        message:"Product is deleted succesfully"
    })

}