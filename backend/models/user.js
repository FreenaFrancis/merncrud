const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:String,
    place:String
})

const userModel=mongoose.model("user",userSchema)
module.exports=userModel;