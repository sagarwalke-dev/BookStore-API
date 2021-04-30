let mongoose=require('mongoose');
let config=require('config');

let username=config.get('db.username');
let password=config.get('db.password');
let dbName=config.get('db.name');
const URL=`mongodb+srv://${username}:${password}@cluster0.3wkxm.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const AutoIncrementFactory = require('mongoose-sequence');

//connnect to mongodb database
// mongoose.connect(`mongodb://${host}:${port}/${dbName}`);
mongoose.connect(URL);

//create connection object
const CONN=mongoose.connection;

const AutoIncrement=AutoIncrementFactory(CONN);

//open connection
CONN.on('open',()=>{
    console.log('Database connected...');
});

module.exports={AutoIncrement};