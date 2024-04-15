const mongoose=require("mongoose")

const user_schema=mongoose.Schema({
    email:String,
    name:String,
    passward:String,
})

const user_Modal=new mongoose.model("user",user_schema)
module.exports={user_Modal}