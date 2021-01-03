const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


//this is a class of author schema and defines the datatype of the properties

const authorSchema = new Schema({
    name:String,
    age:Number

});

module.exports = mongoose.model('Author',authorSchema)