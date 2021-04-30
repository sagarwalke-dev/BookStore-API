let express=require('express');
let app=express();
let config=require('config');
let router=require('./routes/BookStoreRouter');
let path=require('path');

//configure static middelware
app.use(express.static(path.join(__dirname,'./public/')));
//configure router
app.use('',router);

//configure port for express
app.listen(process.env.PORT || config.get('app.port'), ()=>{
    console.log(`server started on http://localhost:${config.get('app.port')}`);
});