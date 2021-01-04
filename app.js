const express = require('express');
// const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const schema = require('./schema/schema'); 

//more api test for express
const http = require('http');
//import the api route
const itemsRouter = require('./routes/items')


const app = express();
app.use(express.json());


//will define the items  url using the items router to get all the mtds 
app.use('/items', itemsRouter);
//default url TO API
app.use('/', function(req,res){
    res.send('my api is working fine thanks to God')

})



//initialize mongoose
// const mongoose = require('mongoose');

//cross origin resourses
const cors = require('cors')
app.use(cors());


   
//mongoose connection string to the mongoose cloud database 
// mongoose.connect('mongodb+srv://farrelljr:IZCwg8C3M39eQQCA@cluster0.emkwv.mongodb.net/Graphql?retryWrites=true&w=majority',
// {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }, (err) => {
//     if (err)
//         console.error(err);
//     else
//         console.log("Connected to the mongodb"); 
// });


// app.use('/graphql',graphqlHTTP({
//     schema,
//     graphiql:true
// }));


app.listen(4000, ()=>{
    console.log('now listening for requests on port 4000');
    console.error();
})
