
const express = require("express");
const route = express.Router()
const { createBook, fetchBook, fetchBookById, deleteBook, updateBook } = require("../controller/book")

route.post("/", createBook)

route.get("/", fetchBook)

route.get("/:id", fetchBookById)

route.delete("/:id", deleteBook)

route.put("/:id", updateBook)

module.exports = route