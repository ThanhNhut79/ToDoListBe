const mongoose = require("mongoose")

const todoSchema = mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, required: false, default: false },
  date: { type: String, required: true },
})

module.exports = mongoose.model("Todo", todoSchema)
