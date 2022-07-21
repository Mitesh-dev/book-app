const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book
