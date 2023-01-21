const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const foodLogSchema = new mongoose.Schema(
  {
    //we need to pass an argument because we need a constructor that takes an object
    //make sure you have an item with a type and required
    main: { type: String, required: true },
    side: { type: String, required: true },
    seconds: { type: Boolean, default: false },
    leftovers: { type: Boolean, default: true }
  },
  { timestamps: true }
)

console.log(foodLogSchema.createdAt)
//default to True
//found this online
//mongoose.Schema.Types.Boolean.convertToFalse

// mongoose.Schema.goodDay.Boolean.convertToTrue

//always make sure you can export it
const FoodLog = mongoose.model('foodLog', foodLogSchema)

module.exports = FoodLog
