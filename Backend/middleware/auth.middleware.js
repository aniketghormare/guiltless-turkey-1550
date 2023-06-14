const jwt=require("jsonwebtoken")
require("dotenv").config()


const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        try {
            const decoded=jwt.verify(token,process.env.secret)
            if(decoded){
                req.body.userID=decoded.userID
                req.body.user=decoded.user
                next()
            }else{
                res.status(200).json({msg: "Not Authorized"})
            }
        } catch (error) {
            res.status(200).json({error:error.message})
        }
    }else{
        res.status(400).json({msg: "Login first"})
    }

}

module.exports={
    auth
}