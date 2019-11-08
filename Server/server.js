var express=require("express");
const path=require("path");
var bodyparser=require("body-parser");
var mongoose=require("mongoose");

var adminrouter=require("./routes/adminrouter");
var url = "mongodb+srv://dinish:dinish@cluster0-llco8.mongodb.net/test?retryWrites=true&w=majority";

const app=express();

// app.use(express.static(path.join))
app.use(bodyparser.urlencoded({extended:true}));

app.use(bodyparser.json());
app.use("/admin",adminrouter);

app.listen("8080",function(req,res){
    console.log("Server started Listening...");
})
mongoose.connect(url,function(err){
    if(err)
        throw err;
    else    
        console.log("DB Connected...");
})
