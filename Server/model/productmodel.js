var mongoose=require("mongoose");
var schema=mongoose.Schema;

var productmodelschema=new schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number},
    category{type:String}
    
})

var productmodel=mongoose.model("product",productmodelschema,"producttable");
module.exports=productmodel;