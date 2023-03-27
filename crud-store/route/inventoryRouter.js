const express = require('express')
const inventory = require('../model/inventory.js')
const inventoryRouter = express.Router()
const Inventory = require('../model/inventory.js')

inventoryRouter.get("/", (req,res,next) =>{
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.post("/", (req, res, next) =>{
    const newInventory = new Inventory(req.body)
    newInventory.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.get("/:search/genre", (req,res,next) =>{
    Inventory.find({computer: req.query.computerId}, (err, inventory) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

inventoryRouter.delete("/:inventoryId" ,(req, res, next) =>{
    Inventory.findByIdAndDelete({_id: req.params.inventoryId}, (err, deleteItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`Successfully deleted item ${deleteItem.computer} from the database`)
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) =>{
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new : true},
        (err, undatedInventory) =>{
            if(err){
            res.status(500)
            return next(err)
        }
            return res.status(201).send(undatedInventory)
    }
    )
})






module.exports = inventoryRouter