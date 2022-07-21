const express = require("express")
const route = express.Router()
const chapterController = require("../controller/chapter")

route.post("/", chapterController.createChapter)

route.get("/", chapterController.fetchChapter)

route.get("/:id", chapterController.fetchChapterById)

route.delete("/:id", chapterController.deleteChapter)

route.put("/:id", chapterController.updateChapter)

module.exports = route