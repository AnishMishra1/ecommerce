const app = require("./App")

const dotenv = require("dotenv");
const PORT = process.env.PORT;



//config

dotenv.config({path:"backend/config/config.env"})


app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})