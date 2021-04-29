let bookModel = require('../model/BookModel');

let db = require('../services/db');

//get all books
let getAllBooks = async () => {
    try {
        console.log('Book data retrived successfully...');
        return await bookModel.find().sort( { bookName: 1 } );
    }
    catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

//insert book
let addBook=async(name,author,relase,price,qty)=>{
    try {
        return await new bookModel({bookName:name,bookAuthor:author,bookRelease:relase,bookPrice:price,bookQty:qty}).save();
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

//get Book details by id
let getBookById=async(id)=>{
    try {
        return await bookModel.find({bookId:id});
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

//update book Qty by the id
let updateBookQtyById=async(id,qty)=>{
    try {
        return await bookModel.updateOne({bookId:id},{bookQty:qty});
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

//delete the book data by id
let deleteBookById=async(id)=>{
    try {
        return await bookModel.deleteOne({bookId:id});
    } catch (err) {
        console.log(`ERROR: ${err}`);
    }
}

module.exports={getAllBooks,addBook,getBookById,updateBookQtyById,deleteBookById};