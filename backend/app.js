const express = require('express');
const app = express();
const connectDB = require('./config/database');
const errorMiddleWare = require("./middleware/error")


//Coonect to Database
connectDB();

app.use(express.json());

// app.use('/',(req,res) =>{
//     res.status(200).json({data:'Ecommerce App'});
// })

//Routes Import

const product = require("./routes/productRoute");
const connectDatabase = require('./config/database');

app.use("/api/v1", product)

//middleware  for error
app.use(errorMiddleWare)

module.exports = app;