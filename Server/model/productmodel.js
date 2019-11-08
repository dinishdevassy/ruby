var mongoose=require("mongoose");
var schema=mongoose.Schema;

var productmodelschema=new schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    discount:{type:Number},
    category:{type:String},
    itemtype:{type:String},
    image:{type:String},
    qty:{type:String},
    date:{type:String}
})

var productmodel=mongoose.model("stock",productmodelschema,"stock");
module.exports=productmodel;