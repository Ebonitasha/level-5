const express = require("express")
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')



bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

bountyRouter.post("/", (req,res, next) =>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
       if(err){
        res.status(500)
        return next(err)
       } 
       return res.status(201).send(savedBounty)
    })
 
})

bountyRouter.get("/search/genre", (req, res, next) => {
    Bounty.find({Type: req.query.Type}, (err, bounties) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})



bountyRouter.delete("/:bountyId", (req,res, next) =>{
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId}, 
        (err, deleteItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deleteItem.title} from the database`)
    })
})
 
bountyRouter.put("/:bountyId", (req,res, next) => {
  Bounty.findOneAndUpdate(
    {_id: req.params.bountyId}, // find this one to update
    req.body, // updata the object with the data
    {new : true}, //send back updated version 
    (err, updatedBounty) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    }
  )
})

module.exports = bountyRouter

 //GET one
// bountyRouter.get("/:bountyId", (req,res,next) =>{
//     const bountyId= req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty){
//         const error = new Error("ITEM WAS NOT FOUND")
//         return next(error)
//     }
//     res.send(foundBounty)
// })
// post one
// bountyRouter.post("/", (req,res) =>{
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//    // res.send("new person was added to database") ///POST REQUEST WHEN SETTING UP SERVER 1ST
//     res.send(newBounty) /// SWITCH POST REQUEST WHEN SETTING UP THE CLIENT 2NDl 
// })

// bountyRouter.delete("/:bountiesId", (req,res) =>{
//     const bountiesId = req.params.bountiesId
//     const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId)
//     bounties.splice(bountiesIndex, 1)
//     res.send("Item removed")  
// })

// bountyRouter.put("/:bountiesId", (req,res) => {
//     const bountiesId = req.params.bountiesId
//     const updatedObject = req.body
//     const bountiesIndex = bounties.findIndex(bounty => bounty._id === bountiesId)
//     const updatedBounty = Object.assign(bounties[bountiesIndex], updatedObject)
//     res.send(updatedBounty)
// })
// CAN USE THE ABOVE OR BOTTOM WAY 
// bountyRouter.route("/")
// get((req,res) => {
//     res.send(bounties)
// })
// post((req,res) =>{
//     const newBounty = req.body
//     newBounty._id = uuidv4()
//     bounties.push(newBounty)
//     res.send("new person was added to database")
// })