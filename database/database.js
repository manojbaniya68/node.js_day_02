const mongoose = require("mongoose") // common js
// import 'mongoose'

async function connectToDb()
{
   await mongoose.connect("mongodb+srv://manojbaniya:manoj12345@cluster0.vo2sdfk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

   console.log("Database connected")
}
module.exports = connectToDb