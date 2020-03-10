const mongoose = require("mongoose")

const tipSchema = new mongoose.Schema({
    title: String,
    link: String
})

module.exports = mongoose.model("Tip", tipSchema)