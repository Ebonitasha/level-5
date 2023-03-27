const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect(`mongodb://ebonitasha:Purplekisses2@ac-sjyztdd-shard-00-00.gfnymjn.mongodb.net:27017,ac-sjyztdd-shard-00-01.gfnymjn.mongodb.net:27017,ac-sjyztdd-shard-00-02.gfnymjn.mongodb.net:27017/?ssl=true&replicaSet=atlas-b4znir-shard-0&authSource=admin&retryWrites=true&w=majority`,

    () => console.log("connected to db")
)

app.use("/inventory", require("./route/inventoryRouter.js"))


app.listen(8000, () => {
    console.log("connected to server")
})