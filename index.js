require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bookRoute = require("./routes/book")
const chapterRoute = require("./routes/chapter")
app.use(express.json())

app.use("/api/books", bookRoute);
app.use("/api/chapters", chapterRoute);

 mongoose.connect(process.env.MONGODB_URL)

const port = 2001
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})