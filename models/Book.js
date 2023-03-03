// models/Book.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    takenBy: {
        type: String,
    },
    takenDate: {
        type: String,
    },
    reservedBy: {
        type: [String],
    },
    cover: {
        type: String,
    },
});

module.exports = Book = mongoose.model('book', BookSchema);
