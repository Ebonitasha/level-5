const mongoose = require('mongoose')
const Schema = mongoose.Schema


//bounty blueprint
const bountySchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Living:{
        type: Boolean,
        required: true
    },
    Amount:{
        type: Number,
        required:true
    },
    Type: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Bounty", bountySchema)


// {
//     "FirstName": "mary",
//     "LastName": "lu",
//     "Living": "no",
//     "Amount": "2",
//     "Type": "seth"
   
// }