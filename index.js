const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const todoRoutes = require("./routes/todo")

// app
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Connected"))

// routes
app.use("/", todoRoutes)

const PORT = process.env.PORT || 7000

app.listen(PORT, (req, res) => {
  console.log("listening on port " + PORT)
})
