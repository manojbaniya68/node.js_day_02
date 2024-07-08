const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {
        type : String
    },
    subtitle: {
        type: String
    },
    description : {
        type: String
    },
    image: {
        type: String
    }
})

const blog = mongoose.model("blog",blogSchema)

module.exports = blog