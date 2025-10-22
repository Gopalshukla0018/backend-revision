import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true

    },
    publishedDate:{
        type:Number,
        reuquired:true
    }
})

 const Book = mongoose.model("Book",booksSchema) ;
 export default Book;
