//Making file for Database

const mongoose = require("mongoose")
const MONGODB_URL = process.env.MONGODB_URL|| "mongodb://0.0.0.0:27017/ecommerce";


const connectDatabase = () => {
    mongoose
    .connect(MONGODB_URL)
    .then((conn) => console.log(`connected to DB :${conn.connection.host}`))
    // .catch((err) => console.log(err.message)) => it is handled in server.js
};

module.exports = connectDatabase;