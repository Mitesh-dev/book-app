const express = require("express")
const route = express.Router()
const { createChapter, fetchChapter, fetchChapterById, deleteChapter, updateChapter } = require("../controller/chapter")

route.post("/", createChapter)

route.get("/", fetchChapter)

route.get("/:id", fetchChapterById)

route.delete("/:id", deleteChapter)

route.put("/:id", updateChapter)

module.exports = route