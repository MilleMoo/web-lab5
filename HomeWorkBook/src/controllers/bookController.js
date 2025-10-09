const Book = require("../models/bookModel");

exports.createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        
        if (!title || !author || !publishedYear) {
            return res.status(400).json({ message: "Please provide title, author, and publishedYear." });
        }

        const newBook = new Book({
            title,
            author,
            publishedYear,
        });

        await newBook.save();
        res.status(201).send(newBook);

    } catch (err) {
        res.status(500).send({ message: "Server error", error: err.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;

        if (!title && !author && !publishedYear) {
            return res.status(400).json({ message: "Please provide at least one field to update." });
        }
        
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } 
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book updated successfully", book: updatedBook });

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};