const mongoose =require("mongoose");

const BlacklistSchema = new mongoose.Schema({
token: {
type: String, required: true, unique: true,},
},{
    versionKey:false
})

const BlacklistModel = mongoose.model("Blacklist", BlacklistSchema);


module.exports = { BlacklistModel}