const mongoose=require("mongoose")


const AdminSchema=mongoose.Schema({
    name : String,
    email : String,
    password : String,
    age : Number
},{
    versionKey:false
})

const AdminModel=mongoose.model("admin", AdminSchema)

module.exports={
    AdminModel
}