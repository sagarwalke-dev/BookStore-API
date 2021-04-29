let mongoose=require('mongoose');
let config=require('config');

let host=config.get('db.host');
let port=config.get('db.port');
let dbName=config.get('db.name');
const AutoIncrementFactory = require('mongoose-sequence');

//connnect to mongodb database
mongoose.connect(`mongodb://${host}:${port}/${dbName}`);

//create connection object
const CONN=mongoose.connection;

const AutoIncrement=AutoIncrementFactory(CONN);

//open connection
CONN.on('open',()=>{
    console.log('Database connected...');
});

module.exports={AutoIncrement};