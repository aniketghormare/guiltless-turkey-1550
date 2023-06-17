const mongoose =require("mongoose");

const AdminBlacklistSchema = new mongoose.Schema({
token: {
type: String, required: true, unique: true,},
},{
    versionKey:false
})

const AdminBlacklistModel = mongoose.model("AdminBlacklist", AdminBlacklistSchema);


module.exports = { AdminBlacklistModel }