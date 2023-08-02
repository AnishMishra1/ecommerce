const app = require("./App")

const dotenv = require("dotenv");
const PORT = process.env.PORT || 5674;



//config

require('dotenv').config();


app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})