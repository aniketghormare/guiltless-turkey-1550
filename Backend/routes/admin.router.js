const express=require("express")
const bcrypt=require("bcrypt")
const {AdminModel}=require("../model/admin.model")
const {AdminBlacklistModel}=require("../model/admin.blacklist.router")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const adminRouter=express.Router()

adminRouter.post("/register",async(req,res)=>{
    const {name,email,password,age}=req.body
    try {
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(200).json({err:err.message})
            }else{
                const admin=new AdminModel({name,email,password:hash,age})
                await admin.save()
                res.status(200).json({msg:"New admin has been added",admin: req.body})
            }
        })
    } catch (error) {
        res.status(400).json({error:error})
    }
})


adminRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
      const admin=await AdminModel.findOne({email})
      if(admin){
        bcrypt.compare(password,admin.password,(err,result)=>{
            if(result){
                let token=jwt.sign({adminID:admin._id,admin:admin.name},process.env.adminSecret,{ expiresIn: "7 days"})
                res.status(200).json({msg:"Logged in", token})
            }else{
                res.status(200).json({error:"wrong credentials"})
            }
        })
      }else{
        res.status(200).json({msg:"admin not found"})
      }
    } catch (error) {
        res.status(400).json({error:error})
    }
})

adminRouter.post("/logout", async (req, res) =>{
try{
    const token=req.headers.authorization?.split(" ")[1]
    const adminblacklistedToken = new AdminBlacklistModel({ token });
    await adminblacklistedToken.save()
    res.status(200).send("Logged out successfully");
}catch (err) {
res.status(500).send("Server error");
}
});


module.exports={
    adminRouter
}