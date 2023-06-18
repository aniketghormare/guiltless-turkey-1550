const express=require("express")
const { auth } = require("../middleware/auth.middleware")
const { CartModel } = require("../model/cart.model")
require("dotenv").config()

const cartRouter=express.Router()


cartRouter.use(auth)

cartRouter.post("/add",async(req,res)=>{
    const {_id}=req.body
    try{
        // const data= await CartModel.find({"_id":_id})
        // if(data){
        //     res.status(200).json({msg:"Product already exist"})
        // }else{
            const cart=new CartModel(req.body)
            await cart.save()
            res.status(200).json({msg:"Cart has been added", cart:req.body})
        //}
       
    }catch(err){
        res.status(400).json({err:err})
    }
})

cartRouter.get("/",async(req,res)=>{
    try {
        const cart= await CartModel.find()
        res.status(200).json({msg:cart})
        
    } catch (error) {
        res.status(400).json({err:error})
    }
    
})
cartRouter.delete("/remove/:cartid",async(req,res)=>{
    const {cartid}=req.params
    try {
       await  CartModel.findByIdAndDelete({_id:cartid})
        res.json({msg:"data frleted"})
    } catch (error) {
        res.status(400).json({err:error})
    }
    
})

module.exports={
    cartRouter
}
