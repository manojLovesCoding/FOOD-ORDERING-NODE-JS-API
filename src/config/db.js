const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://mkum9417:djBNqdQaq5LR0mhM@cluster0.0r8ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB() {
    return mongoose.connect(mongodbURL)

}

module.exports = connectDB