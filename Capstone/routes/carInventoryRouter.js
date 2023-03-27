const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../model/inventory.js')

 inventoryRouter.get("/", (req, res, next) =>{
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})



//GET BY GENRE
inventoryRouter.get("/search/Year", (req,res,next) => {
    Inventory.find({Year: req.query.Year }, (err, inventory) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

inventoryRouter.get("/search/make", (req,res,next) => {
    Inventory.find({Make: req.query.Make} , (err, inventory) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

inventoryRouter.get("/search/FuelType", (req,res,next) => {
    Inventory.find({FuelType: req.query.FuelType} , (err, inventory) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(inventory)
    })
})

inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.put("/:inventoryId", (req,res, next) => {
    Inventory.findByIdAndUpdate(
        {_id: req.params.inventoryId},
        req.body, 
        {new : true},
        (err, updatedInventory) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedInventory)
        }
    )

})

module.exports = inventoryRouter