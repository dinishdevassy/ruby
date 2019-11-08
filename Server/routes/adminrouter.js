var express=require("express");
var bodyparser=require("body-parser");
var path=require("path");


var multer=require("multer");

var product=require("../model/productmodel");
const router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));

module.exports=router;