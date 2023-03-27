const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');


mongoose.set('strictQuery', true)

// MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

//CONNECT TO DATEBASE 
// mongoose.connect('mongodb://localhost:27017/bountiesdb',
//     ()=> console.log("connected to db")
// )
mongoose.connect('mongodb://ebonitasha:Purplekisses2@ac-sjyztdd-shard-00-00.gfnymjn.mongodb.net:27017,ac-sjyztdd-shard-00-01.gfnymjn.mongodb.net:27017,ac-sjyztdd-shard-00-02.gfnymjn.mongodb.net:27017/?ssl=true&replicaSet=atlas-b4znir-shard-0&authSource=admin&retryWrites=true&w=majority',

    () => console.log("connected to db")
)


// ROUTES
app.use("/bounties", require("./route/bountyRouter.js"))


//error handler /// CAN HANDLE ALL ERRORS IN ONE PLACE
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(7000, () => {
    console.log("up and running")
})