let mongoose = require('mongoose');
let db=require('../services/db');

//define schema
let bookModel = mongoose.Schema({
    "bookId": { type: Number,unique:true },
    "bookName": { type: String, require: true },
    "bookAuthor": { type: String },
    "bookRelease": { type: Date },
    "bookPrice": { type: Number },
    "bookQty": { type: Number, default: 0 }
});

bookModel.plugin(db.AutoIncrement, {inc_field: 'bookId'});
//export module
module.exports=mongoose.model('BookStore',bookModel,'book');