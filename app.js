const express = require('express')
const morgan = require('morgan')
const app = express()

const initMongoose = require("./models/initMongo")
const bodyparser = require("body-parser")
const tipsRoute = require("./routes/tips")

const cors = require('cors')

initMongoose();

app.use(express.static('frontend/build'))
app.use(morgan("combined"))
app.use(bodyparser.json())
app.use(cors)

app.use("/api/tips", tipsRoute)

module.exports = app

