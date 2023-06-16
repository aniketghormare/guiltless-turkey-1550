const mongoose=require("mongoose")

const GameSchema=mongoose.Schema({
    title : String,
    desc : String,
    rating : Number,
    userID:String
},{
    versionKey:false
})

const GameModel=mongoose.model("game", GameSchema)

module.exports={
    GameModel
}