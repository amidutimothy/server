//first we import the required essentials 
const express = require('express');
//followed by the new route/ way 
const router = express.Router();


//then now i create a json dummy data array 

let data = [
    {id:1, name:"Things fall apart", genre:"fantacy", author:"Kinua achede"},
    {id:2, name:"The long earth", genre:"fantacy", author:"Kinua achede"},
    {id:3, name:"Think big and grow rich", genre:"fantacy", author:"Kinua achede"},
    {id:4, name:"The Bible", genre:"fantacy", author:"Eh this one is hard"},
];


//READ MTHD
//this point of the api returns a json books array
router.get('/', function(req, res){
    res.status(200).json(data);
});



//this  point return and object from the books array find by id
//we get the id from the url end-points 
router.get('/:id', function(req , res){
    //you to find a book object from the array using an id 
    let found = data.find(function(item){
        return item.id === parseInt(req.params.id);
    });
    //check with if conds
    if(found){
        res.status(200).json(found);
    }else{
        res.sendStatus(404)
    }
});

//CREATE LETS ADD MORE BOOKS TO THE LIST 
router.post('/', function(req, res){
    let itemIds = data.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    let newItem = {
        id: newId,
        name: req.body.name,
        genre: req.body.genre,
        author: req.body.author  
    };
    data.push(newItem);

    //respond with the created status 
    res.status(201).json(newItem);

})

module.exports = router;