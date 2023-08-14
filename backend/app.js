
const express = require('express');
const app = express();
const connectDB = require('./config/database');
const errorMiddleWare = require("./middleware/error")
const cookieParser = require('cookie-parser')


//Coonect to Database
connectDB();

app.use(express.json());
app.use(cookieParser());

// app.use('/',(req,res) =>{
//     res.status(200).json({data:'Ecommerce App'});
// })

//Routes Import

const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");

const connectDatabase = require('./config/database');

app.use("/api/v1", product)
app.use("/api/v1", user);

//middleware  for error
app.use(errorMiddleWare)

module.exports = app;