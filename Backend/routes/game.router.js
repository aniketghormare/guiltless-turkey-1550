const express=require("express")
const {GameModel}=require("../model/game.model")
const jwt=require("jsonwebtoken")
const { auth } = require("../middleware/auth.middleware")

require("dotenv").config()

const gameRouter=express.Router()

gameRouter.use(auth)
// gameRouter.use(adminAuth)


gameRouter.get("/",async(req,res)=>{
 
    try {
        const game= await GameModel.find()
        res.status(200).json({game})
        
    } catch (error) {
        res.status(400).json({err:error})
    }
    
})

// gameRouter.get("/",async(req,res)=>{
//     const query=req.query
 
//     try {
//         const game= await GameModel.find({query})
//         res.status(200).json({game})
        
//     } catch (error) {
//         res.status(400).json({err:error})
//     }
    
// })


gameRouter.get("/page/:pagenum",async(req,res)=>{
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
    gameRouter
}