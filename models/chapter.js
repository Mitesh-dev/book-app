const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    chapterName: String,
    writer: String,
    pages: Number
})

const chapter = mongoose.model('Chapter', chapterSchema)

module.exports = chapter