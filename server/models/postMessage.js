const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({

    title: String,
    message: String,
    creator:String,
    tags: [String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },



});

const postModel = mongoose.model("postModel",PostSchema);

module.exports = postModel;