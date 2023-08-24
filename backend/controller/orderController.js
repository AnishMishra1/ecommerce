const Order = require("../models/orderModels");
const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");

//create new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,

    })

     res.status(201).json({
        success: true,
        order,
     })
});

//get Single order
exports.getSingleOrder = catchAsyncErrors(async (req,res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if(!order){
        return next(new ErrorHandler("Order not foundwith this Id", 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});

//get logged in user order
exports.myOrders = catchAsyncErrors(async (req,res, next) => {
    const orders = await Order.find({user: req.user._id});

    res.status(200).json({
        success: true,
        orders,
    });
});

//get all order-- Admin
exports.getAllOrders = catchAsyncErrors(async (req,res, next) => {
    const orders = await Order.find();

    let totalAmount = 0 ;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        orders,
        totalAmount
    });
});


//Update Order Status-- Admin
exports.updateOrderStatus = catchAsyncErrors(async (req,res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("Order not found with tis id",404))
    }

    if(order.orderStatus === "Delivered"){
        return next (new ErrorHandler("You have already delivered this order",400))
    }

    order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity)
    })

    order.orderStatus = req.body.status;

    if(req.body.status === "Delivered"){
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false});

   
    res.status(200).json({
        success: true,
        
    });
});

//Function regarding status
async function updateStock (id, quantity){
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save({ validateBeforeSave: false})

    
}

//delete order-- Admin
exports.deleteOrder = catchAsyncErrors(async (req,res, next) => {
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("Order not found with tis id",404))
    }

    await order.deleteOne();

    
    res.status(200).json({
        success: true,
        
    });
});


