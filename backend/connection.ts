const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');

const connection=async()=>{
  
    try{

      const connect=await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
   
      // const db =await client.db("BCA");
      console.log("connected")
    }catch(error){
      console.log("unable to connect",error)
    }
}

module.exports=connection;
