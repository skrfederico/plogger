const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const plogSchema = new mongoose.Schema(
  {
    //we need to pass an argument because we need a constructor that takes an object
    //make sure you have an item with a type and required
    title: { type: String, required: true },
    body: { type: String, required: true },
    goodDay: { type: Boolean, default: true }
  },
  { timestamps: true }
)

console.log(plogSchema.createdAt)
//default to True
//found this online
//mongoose.Schema.Types.Boolean.convertToFalse

// mongoose.Schema.goodDay.Boolean.convertToTrue

//always make sure you can export it
const Plog = mongoose.model('Plog', plogSchema)

module.exports = Plog
