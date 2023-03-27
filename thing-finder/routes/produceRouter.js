const express = require("express")
const produceRouter = express.Router()
const {v4:uuidv4} = require('uuid')

const produce = [
    {type: "strawberry", brand: "fruit", price: "$4.35", _id:uuidv4()},
    {type: "watermelon", brand: "fruit", price: "$8.00",  _id:uuidv4()},
    {type: "sweet potato", brand: "vegetables", price: "$4.32", _id:uuidv4()},
    {type: "asparagus", brand: "vegetables", price: "$3.20", _id:uuidv4()},
    {type: "avacado", brand: "fruit", price: "$.50", _id:uuidv4()},
    {type: "apples", brand: "fruit", price: "$3.57", _id:uuidv4()},
    {type: "corn", brand: "vegetables", price: "$4.00", _id:uuidv4()}

]
// GET ALL 
produceRouter.get("/" ,(req,res) =>{
    res.send(produce)
})

// GET ONE 
produceRouter.get("/:produceId", (req,res) => {
    // console.log(req.params.produceId)  req.params .produceId in console log
    const produceId = req.params.produceId
    const foundProduce = produce.find(item => item._id === produceId)
    res.send(foundProduce)
})

// GET BY BRAND
produceRouter.get("/search/brand" ,( req,res) => {
    // console.log(req) 
    // console.log (req) to see where the data needs to be pulled from
    const brand = req.query.brand
    const foundBrand = produce.filter(goods => goods.brand === brand)
    res.send(foundBrand)
})
// DELETE ONE
produceRouter.delete("/:produceId", (req,res) => {
    const produceId = req.params.produceId
    const produceIndex = produce.findIndex(pro => pro._id === produceId)
    produce.splice(produceIndex, 1)
    res.send("ITEM WAS DELETED")
})

// PUT REQUEST
produceRouter.put('/:produceId', (req, res) =>{
    const produceId = req.params.produceId
    const undatedItem = req.body
    const produceIndex = produce.findIndex(pro => pro._id === produceId)
    undatedProduce = Object.assign(produce[produceIndex], undatedItem)
    res.send(undatedProduce)
})

module.exports = produceRouter