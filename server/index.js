const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes/post.js");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

//

const CONNECTION_URL = "mongodb+srv://sneh9817:Pun@1234@cluster0.gd0e5.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT||5000;

// database connection
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true});


app.use("/",postRoutes);














app.listen(5000,function(){

    console.log("server start");
 
});


