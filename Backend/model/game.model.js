const mongoose=require("mongoose")

const GameSchema=mongoose.Schema({
    name : String,
    avatar : String,
    genre : String,
    price: Number,
    category: String,
    type: String,
    userID:String,
    adminID: String
},{
    versionKey:false
})

const GameModel=mongoose.model("game", GameSchema)

module.exports={
    GameModel
}