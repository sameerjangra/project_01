const mongoose = require('mongoose');
const {Schema ,model} = require("mongoose")

const blogSchema = new Schema({
    tweet:{
        type:String
    },
    img:{
        type:String
    },
    userId: {type: mongoose.Schema.Types.ObjectId}

}, {timestamps:true})

const Blog = model("Blog", blogSchema);
module.exports = Blog;

