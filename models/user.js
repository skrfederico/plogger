const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    //we can have a phone/password
    //the biggest data files are generally userSchemas
    name: { type: String, required },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

const User = mongoose.model('User', plogSchema)

module.exports = User
