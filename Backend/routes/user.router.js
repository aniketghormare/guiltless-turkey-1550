const express=require("express")
const bcrypt=require("bcrypt")
const {UserModel}=require("../model/user.model")
const {BlacklistModel}=require("../model/blacklist.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,password,age}=req.body
    try {
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(200).json({err:err})
            }else{
                const user=new UserModel({name,email,password:hash,age})
                await user.save()
                res.status(200).json({msg:"New user has been added",user: req.body})
            }
        })
    } catch (error) {
        res.status(400).json({error:error})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
      const user=await UserModel.findOne({email})
      if(user){
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                let token=jwt.sign({userID:user._id,user:user.name},process.env.secret,{ expiresIn: "7 days"})
                res.status(200).json({msg:"Logged in", token})
            }else{
                res.status(200).json({error:"wrong credentials"})
            }
        })
      }else{
        res.status(200).json({msg:"user not found"})
      }
    } catch (error) {
        res.status(400).json({error:error})
    }
})

userRouter.post("/logout", async (req, res) =>{
try{
    const token=req.headers.authorization?.split(" ")[1]
    const blacklistedToken = new BlacklistModel({ token });
    await blacklistedToken.save()
    res.status(200).send("Logged out successfully");
}catch (err) {
res.status(400).send("Server error");
}
});


module.exports={
    userRouter
}