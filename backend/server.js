const app = require("./App")

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const PORT = process.env.PORT || 5674;



//config

require('dotenv').config();

//connect Database
connectDatabase();


app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})