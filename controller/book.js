const Book = require("../models/book");

const createBook = async (request, response) => {
    const newBook = request.body
    const newObj = Book(newBook)
    await newObj.save()
    response.json()
}

const fetchBook = async (request, response) => {
    const newBook = await Book.find({})
    response.json(newBook)
}

const fetchBookById = async (request, response) => {
    const newBook = request.params.id
    const bookById = await Book.findById(newBook)
    response.json(bookById)
}

const deleteBook = async (request, response) => {
    const newBook = request.params.id
    await Book.findByIdAndDelete(newBook)
    response.json()
}

const updateBook = async (request, response) => {
    try {
        const newBook = request.params.id
        const newObj = request.body
        const rr = await Book.findByIdAndUpdate(newBook, newObj, { new: true })
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
    createBook: createBook,
    fetchBook: fetchBook,
    fetchBookById: fetchBookById,
    deleteBook: deleteBook,
    updateBook: updateBook
};
