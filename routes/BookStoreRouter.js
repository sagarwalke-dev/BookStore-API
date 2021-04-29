let BookStore=require('../controller/BookStoreController')

let express=require('express');
let router=express.Router();

//getAllBooks
router.get('/getAllBooks',function(req,res){
    BookStore.getAllBooks().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({"status":err});
    });
});

//addBook
router.get('/addBook',function(req,res){
    BookStore.addBook(req.query.bookName,req.query.bookAuthor,req.query.bookRelase,req.query.bookPrice,req.query.bookQty).then(data=>{
        console.log(`Book inserted successfully with id ${data._id}`);
        res.json(data);
    }).catch(err=>{
        console.log(`failed to add book ${err}`);
        res.json({'status':err});
    });
});

//getBookById
router.get('/getBookById',function(req,res){
    BookStore.getBookById(req.query.bookId).then(data=>{
        console.log(`Book details retrived successfully by bookId`);
        res.json(data);
    }).catch(err=>{
        console.log(`failed to get book details by id ${err}`);
        res.json({'status':err});
    });
});

//updateBookQtyById
router.get('/updateBookQtyById',function(req,res){
    BookStore.updateBookQtyById(req.query.bookId,req.query.bookQty).then(data=>{
        console.log(`Book qty updated by id`);
        res.json(data);
    }).catch(err=>{
        console.log(`failed to update book Qty ${err}`);
        res.json({'status':err});
    });
});

//deleteBookById
router.get('/deleteBookById',function(req,res){
    BookStore.deleteBookById(req.query.bookId).then(data=>{
        console.log(`Book data deleted `);
        res.json(data);
    }).catch(err=>{
        console.log(`failed to delete book data ${err}`);
        res.json({'status':err});
    });
});

//error handler
router.get('*',function(req,res){
    res.json({'status':`Invalid endpoint ${req.url}`});
});
router.post('*',function(req,res){
    res.json({'status':'Invalid endpoint'});
});
//export router
module.exports=router;