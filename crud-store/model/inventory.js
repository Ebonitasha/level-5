const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    computer: {
        type: String,
        required: true
    },
    notes: {
        type: String    
    },
    dataType: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Inventory", inventorySchema)