const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI;


const connectDatabase = () => {
    mongoose
    .connect(MONGODB_URI,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    .then(() => console.log("connect to DB"))
    .catch((err) => console.log(err.message))
};

module.exports = connectDatabase;