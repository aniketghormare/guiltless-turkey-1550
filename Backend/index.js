


const express=require("express")
const {connect}=require("./db")
const cors=require("cors")
const {userRouter}=require("./routes/user.router")
const { adminRouter } = require("./routes/admin.router")
const { gameRouter } = require("./routes/game.router")
const { movieRouter } = require("./routes/movie.router")

const { cartRouter } = require("./routes/Cart.router")
const { adminGameRouter } = require("./routes/adminGames.router")
const { adminMovieRouter } = require("./routes/adminMovie.router")


require("dotenv").config()

const app=express()

app.use(cors())

app.use(express.json())



app.use("/users", userRouter)
app.use("/admins", adminRouter)

app.use("/admingames", adminGameRouter)
app.use("/adminmovies", adminMovieRouter)

app.use("/games", gameRouter)
app.use("/movies", movieRouter)
app.use("/cart",cartRouter)

app.listen(process.env.port,async()=>{
try {
    await connect
    console.log("Now DB is connected")
    console.log(`Server is running at port ${process.env.port}`)
} catch (error) {
    console.log(error.message)
}
})