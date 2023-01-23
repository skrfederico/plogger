const mongoose = require('mongoose')

//when we use mongoose we need to make a Schema
const plogSchema = new mongoose.Schema(
  {
    //we need to pass an argument because we need a constructor that takes an object
    //make sure you have an item with a type and required
    number: { type: Number, default: 1 },
    success: { type: Boolean, default: true },
    student: { type: String, required: true },
    teacher: { type: String, required: true },
    parent: { type: String, required: true },
    date: { type: String, required: true },
    category: {
      type: String,
      enum: ['introduction', 'information', 'examNotice', 'misbehaviour'],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    etiquette: { type: Boolean, default: false }
    // introduction: foundPlog.introduction,
    // information: foundPlog.information,
    // examNotice: foundPlog.examNotice,
    // misbehaviour: foundPlog.misbehaviour,
    // title: { type: String, required: true },
    // body: { type: String, required: true },
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
