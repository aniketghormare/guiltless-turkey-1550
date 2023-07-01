const express=require("express")
const {GameModel}=require("../model/game.model")
const jwt=require("jsonwebtoken")
const { adminAuth } = require("../middleware/adminAuth.middleware")
require("dotenv").config()

const adminGameRouter=express.Router()

// gameRouter.use(auth)
adminGameRouter.use(adminAuth)

adminGameRouter.post("/add",async(req,res)=>{
    try{
        const game=new GameModel(req.body)
        await game.save()
        res.status(200).json({msg:"Game has been added", game:req.body})
    }catch(err){
        res.status(400).json({err:err})
    }
})

adminGameRouter.get("/",async(req,res)=>{
    try {
        const game= await GameModel.find()
        console.log(game)
        res.status(200).json({game})
        
    } catch (error) {
        console.log("error")
        res.status(400).json({err:err})
        
    }
    
})

adminGameRouter.patch("/update/:gameID",async(req,res)=>{
    const userDocId=req.body.userID
    const {gameID}=req.params
    try {
        const game=await GameModel.findOne({_id:gameID});
        const userGameId=game.userID

        if(userDocId===userGameId){
            await GameModel.findByIdAndUpdate({_id:gameID},req.body)
            res.status(200).json({msg:"Game has been updated"})
        }else{
            res.status(200).json({msg:"Not Authorized"})
        }
        
    } catch (error) {
        res.status(400).json({error:error})
    }
    
    
})

adminGameRouter.delete("/delete/:gameID",async(req,res)=>{
    const userDocId=req.body.userID
    const {gameID}=req.params
    try {
        const game=await GameModel.findOne({_id:gameID});
        const userGameId=game.userID

        if(userDocId===userGameId){
            await GameModel.findByIdAndDelete({_id:gameID})
            res.status(200).json({msg:"Game has been deleted"})
        }else{
            res.status(200).json({msg:"Not Authorized"})
        }
        
    } catch (error) {
        res.status(400).json({error:error})
    }
})


adminGameRouter.get("/page/:pagenum",async(req,res)=>{
    const Page_Size=3
    const {pagenum}=req.params
    try {
        const game=await GameModel.find({}).skip((pagenum-1)*Page_Size).limit(Page_Size)
        res.status(200).json({game})
    } catch (error) {
        res.status(400).json({error:error})
    }
})


module.exports={
    adminGameRouter
}