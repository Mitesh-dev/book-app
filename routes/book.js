
const express = require("express");
const route = express.Router()
const Book = require("../models/book");
const bookController = require("../controller/book")

route.post("/", bookController.createBook)

route.get("/", bookController.fetchBook)

route.get("/:id", bookController.fetchBookById)

route.delete("/:id", bookController.deleteBook)

route.put("/:id", bookController.updateBook)

module.exports = route