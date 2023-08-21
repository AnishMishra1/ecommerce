
const { config } = require("dotenv");

config();

const app = require("./app")

const PORT = process.env.PORT || 3005 ;





//Handling Uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`error: ${err.message}`);
    console.log(`sutting down the sercer due to uncaughtException`);
    
    process.exit(1)
});

const server = app.listen(PORT, () =>{
    console.log(`server is running at http://localhost:${PORT}`)
})


//unhandled promise rejection

process.on("unhandledRejection", (err) => {
    console.log(`error: ${err.message}`);
    console.log(`sutting down the sercer due to unhandled promise Rejection`);

    server.close(() => {
        process.exit(1)
    })
    
})
