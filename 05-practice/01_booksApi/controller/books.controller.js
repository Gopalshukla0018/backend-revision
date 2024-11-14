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


export const editbooks = async (req,res)=>{
  try {

    const {id}= req.params;
    const {title,author,publishedDate}= req.body;
    const book= await Book.findByIdAndUpdate(id,{
      title,
      author,
      publishedDate
    },{new:true});

    if (!book){
      return res.status(404).json({
        success:false,
        message:"book not found"
      })
    }

    if (!title && !author && !publishedDate){
      return res.status(400).json({
        success:false,
        message:"atleast one field required to update"
      })
    }
    return res.status(200).json({
      success:true,
      message:"book updated successfully",
      data:book
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"error in edit book controller"
    })
  }
}