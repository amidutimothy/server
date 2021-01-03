const  mongoose = require('mongoose');
const Schema = mongoose.Schema;


//this is a class of book schema and defines the datatype of the properties 
const bookSchema = new Schema({
    name:String,
    genre:String,
    authorId:String

});

module.exports = mongoose.model('Book',bookSchema)