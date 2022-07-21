const { request } = require("express")
const Chapter = require("../models/chapter")

const createChapter = async (request, response) => {
    const newChapter = request.body
    const newObj = Chapter(newChapter)
    await newObj.save()
    response.json()
}

const fetchChapter = async (reqest, response) => {
    const newChapter = await Chapter.find({})
    response.json(newChapter)
}

const fetchChapterById = async (request, response) => {
    const newChapter = request.params.id
    const chapterById = await Chapter.findById(newChapter)
    response.json(chapterById)
}

const deleteChapter = async (request, response) => {
    const newChapter = request.params.id
    await Chapter.findByIdAndDelete(newChapter)
    response.json()
}

const updateChapter = async (request, response) => {
    try {
        const newChapter = request.params.id
        const newObj = request.body
        const real = await Chapter.findByIdAndUpdate(newChapter, newObj, { new: true })
        response.json()
    }
    catch (err) {
        response.status(404)
        return response.json({
            message: "Provided id is not matching with any of the bookid"
        })
    }
}

module.exports = {
    createChapter: createChapter,
    fetchChapter: fetchChapter,
    fetchChapterById: fetchChapterById,
    deleteChapter: deleteChapter,
    updateChapter: updateChapter

}