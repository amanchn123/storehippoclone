import express, { Request, Response } from 'express';
const {user_Modal} =require("../modal/user")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const Login=async(req:Request,resp:Response)=>{
    try{
      const {email,passward}= req.body
      console.log(passward,email)
      const response=await user_Modal.findOne({email})
      
      if(response){
        const comparePassward=await bcrypt.compare(passward,response.passward)
        if(comparePassward){
          const payload={email,name:response.name}
          const secretKey="secrhipposshufhr"
          const token = jwt.sign(payload, secretKey, { expiresIn: '5h' }); // Token expires in 1 hour
  
          resp.json({success:true,response,token})
        }else{
          resp.json({success:false})
        }
      }else{
        resp.json({success:false})
      }
    }catch(error){
        console.log("error in login backend",error)
    }
}

const Register=async(req:Request,resp:Response)=>{
  try{
     const {name,email,passward}=req.body;
     const checkExist=await user_Modal.findOne({email:email})
     if(checkExist){
      resp.json({message:"Email already exist"})
      return;
     }
     
     const saltRounds = 10;
     var hashPassword =await bcrypt.hashSync(passward, saltRounds);
     const response=await new user_Modal({name,email,passward:hashPassword}).save()
     resp.json({response})

  }catch(error){
    console.log("error in register backend",error)
  }
}

const Product=async(req:Request,resp:Response)=>{
  const {token}=req.body
  var decoded = jwt.verify(token, 'secrhipposshufhr');
  console.log(decoded)
}

module.exports={Login,Register,Product}