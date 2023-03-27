const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    Make: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true    
    },  
    FuelType: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Mileage: {
        type: Number,
        required: true
    },
    Url: String,
        

})


module.exports = mongoose.model("CarInventory", inventorySchema)