const express = require("express");
const app=express();
//GET,POST<DELETE,PATCH
app.use(express.static('public'))

app.get("/getData",function(req,res){
    res.end("<h1>response from express server</h1>")
})
app.listen(3000,function(){
    console.log("server is active at port3000")
})