



const express=require("express")




const app=express()

app.use(express.json())



app.listen(4500,()=>{
    try {
        
        console.log(`server is running at 4500`)
    } catch (error) {
        console.log(error)
    }
  
})