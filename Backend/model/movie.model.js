const mongoose=require("mongoose")

const MovieSchema=mongoose.Schema({
    title : String,
    desc : String,
    rating : Number,
    userID:String
},{
    versionKey:false
})

const MovieModel=mongoose.model("movie", MovieSchema)

module.exports={
    MovieModel
}