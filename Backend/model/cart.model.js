const mongoose=require("mongoose")

const CartSchema=mongoose.Schema({
    "avatar": String,
    "category": String,
    "genre": String,
    "id" :  Number,
    "name": String,
    "price" : Number,
    "type": String,
    "_id": String,
    "Title":String,
    "Year":String,
    "imdbID":String,
    "Type":String,
    "Poster":String
},{
    versionKey:false
})

const CartModel=mongoose.model("Cart", CartSchema)

module.exports={
    CartModel
}