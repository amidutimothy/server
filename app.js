const express = require('express');
// const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const schema = require('./schema/schema'); 

//more api test for express
const http = require('http');
//import the api route
const itemsRouter = require('./routes/items')

//testing express js api 
const app = express();
app.use(express.json());
// app.use(cors({origin: 'http://localhost:3000'}));

//will define the items  url and it will two end points 
//'/items/' => will return items 
//'/items/id' => will return a single item
app.use('/items', itemsRouter);



//default url TO API
app.use('/', function(req,res){
    res.send('my api is working fine thanks to God')

})



//just used mongoose for testing purposes but its gonna get out
// const mongoose = require('mongoose');

//cross origin resourses
const cors = require('cors')
// const app = express();

//allow cross origin 
app.use(cors());

//hard codded api tests
// app.get('/api/customers', (req , res) =>{

//     const customers = [ 
   
//        {id: 1, firstName: 'John', lastName: 'jenko'},
//        {id: 2, firstName: 'farrell', lastName: 'jack'},
//        {id: 3, firstName: 'muhamood', lastName: 'abdulgaffer'}, 
       
//    ];
//    res.json(customers);
   
//    });

   //first one ends here
   

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



//more trials 
const server = http.createServer(app);

server.listen(4000, ()=>{
    console.log('now listening for requests on port 4000');
    console.error();
})
