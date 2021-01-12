const postMessage = require("../models/postMessage");
const getPosts = async function(req,res){

    const postMessages = await postMessage.find();
    res.json(postMessages);
}
const createPost = function(req,res){

    res.send("post created");
}

module.exports={
    getPosts,
    createPost
}
