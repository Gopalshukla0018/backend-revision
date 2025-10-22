import Book from "../model/books.model.js";

export const createbook = async (req, res) => {
  try {
    const { title, author, publishedDate } = req.body;
    if (!title || !author || !publishedDate) {
      return res.status(400).json({
        success: false,
        message: "all fields required",
      });
    }

    const book = new Book({
      title,
      author,
      publishedDate,
    });
    await book.save();

    return res.status(200).json({
      succcess: true,
      message: "Book added successfuly",
      data: book,
    });
  } catch (error) {
    console.log("error in createBook controller", error);
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (!books || books.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no books found",
      });
    }

    return res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    console.log("error in get all books controller", error);
  }
};
