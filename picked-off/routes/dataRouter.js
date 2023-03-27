const express = require("express")
const dataRouter = express.Router()
const {v4:uuidv4} = require ('uuid')

dataRouter.use((req,res,next) => {
    req.body = {memo: "Rip Rob"}
    console.log("middleware")
    next()
})

const data = [
    {Name: "Robert Willis", title: "best papa ever", birthday: "Oct 12 ,1945", _id:uuidv4()}
]

dataRouter.get("/", (req,res, next) => {
console.log('data was sent')
res.send(req.body)

})

module.exports = dataRouter