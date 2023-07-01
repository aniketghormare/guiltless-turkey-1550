const express=require("express")
const {MovieModel}=require("../model/movie.model")
const jwt=require("jsonwebtoken")
const { auth } = require("../middleware/auth.middleware")


require("dotenv").config()

const movieRouter=express.Router()

movieRouter.use(auth)
// movieRouter.use(adminAuth)


movieRouter.get("/",async(req,res)=>{
    try {
        const movie= await MovieModel.find()
        res.status(200).json({movie})
        
    } catch (error) {
        res.status(400).json({err:err})
    }
    
})



movieRouter.get("/page/:pagenum",async(req,res)=>{
    const Page_Size=3
    const {pagenum}=req.params
    try {
        const movie=await MovieModel.find({}).skip((pagenum-1)*Page_Size).limit(Page_Size)
        res.status(200).json({movie})
    } catch (error) {
        res.status(400).json({error:error})
    }
})


module.exports={
    movieRouter
}