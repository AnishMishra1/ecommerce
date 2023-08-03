require('dotenv').config();
const PORT = process.env.PORT || 3005 ;
const app = require("./App")


const dotenv = require("dotenv");

app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})
