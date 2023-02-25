// routes/api/books.js

const express = require('express');
const router = express.Router();
const multer = require('multer');

// Set up multer storage to save uploaded images to the 'uploads' folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

// Load Book model
const Book = require('../../models/Book');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find()
        .then((books) => res.json(books))
        .catch((err) => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((err) => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', upload.single('image'), (req, res) => {
    console.log(req.body);
    Book.create({ ...req.body, cover: req.file.path })
        .then((book) => res.json({ msg: 'Book added successfully' }))
        .catch((err) => {
            console.log(err);
            res.status(400).json({ error: req.body });
        });
});
// @route GET api/books
// @description reserve book
// @access Public
router.post('/reserve', async (req, res) => {
    try {
        const { bookId, reserveeName } = req.body;
        const book = await Book.findById(bookId);
        if (book) {
            if (!book.reservedBy) {
                book.reservedBy = [reserveeName];
            } else {
                book.reservedBy.push(reserveeName);
            }
            await book.save();
            return res.json(200);
        }
    } catch (error) {
        console.log(error);
    }
});
// @route GET api/books
// @description reserve book
// @access Public
router.get('/reservees', async (req, res) => {
    try {
        const { bookId } = req.body;
        const book = await Book.findById(bookId);
        if (book) {
            return res.send(200).json({ book });
        }
    } catch (error) {
        console.log(error);
    }
});

// @route GET api/books
// @description reserve book
// @access Public
router.post('/takeBook', async (req, res) => {
    try {
        const { bookId, takerName } = req.body;
        const book = await Book.findById(bookId);
        if (book) {
            if (!book.takenBy) {
                book.takenBy = takerName;
                book.takenDate = new Date().getTime();
                await book.save();
                return res.json(200);
            } else {
                throw new Error('Книгата вече е взета');
            }
        }
    } catch (error) {
        console.log(error);
    }
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then((book) => res.json({ msg: 'Updated successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Database' }));
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then((book) => res.json({ mgs: 'Book entry deleted successfully' }))
        .catch((err) => res.status(404).json({ error: 'No such a book' }));
});

module.exports = router;
