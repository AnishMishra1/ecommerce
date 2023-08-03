const Product = require("../models/productModels")

//create product and make logic
exports.createProduct = async (req,res,next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}


exports.getAllProduct = (req,res) => {
    res.status(200).json({message:"routes is working fines"})
}