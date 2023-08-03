const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,"please enter valid Product Name"]
    },
    description:{
        type:String,
        required:[true,"please enter product description"]
    },
    price:{
        type: Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannot exceed 8 charater"]
    },
    rating:{
        type:Number,
        default:0
    },
    Image:[
        {
            public_id:{
            type:String,
            required:true
            },
            url:{
            type:String,
            required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"please choose one category"],
        
    },
    stock:{
        type:Number,
        required:[true,"please enter product stck"],
        maxLength:[4,"stock cannot exceed 4 charater"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("product",ProductSchema);