const graphql = require('graphql');
const _ = require('lodash');

//calling the book and author models
const Book =require('../models/book');
const Author =require('../models/author');


const {GraphQLObjectType,
        GraphQLSchema,
        GraphQLList,
        GraphQLString,
        GraphQLID,
        GraphQLNonNULL,
        GraphQLInt
} = graphql;


//GRAPHQL DESCRIBES THE DATA TYPES IN THE SCHEMA FROM MODELS THAT HAVE BEEN IMPORTED AS EXTERNAL FILES
const BookType = new GraphQLObjectType({
    name:'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent);
                
                return Author.findById(parent.authorId);
            }
        }


    })

});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
                console.log(parent);
            
                return Book.find({authorId:parent.id});
            }
        }

    })

});


//
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args: { id: {type: GraphQLID}},

            resolve(parent,args){
        
            //code to get data from other data sources
            // return _.find(books, {id:args.id});
               return Book.findById(args.id); 
            }
        },        
            author:{
            type: AuthorType,
            args: { id: {type: GraphQLID}},

            resolve(parent,args){
        
            //code to get data from other data sources
            // return _.find(authors, {id:args.id});
            return Author.findById(args.id); 
                
            }
        },
        books:{
            type: new GraphQLList(BookType),

            resolve(parent,args){
                return Book.find({});
            }

         },
        authors:{
            type: new GraphQLList(AuthorType),

            resolve(parent,args){
                return Author.find({});
            }
       
            
        }
    }    
});
  


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name:{type :  GraphQLString},
                age:{ type : GraphQLInt}
            },
            resolve(parent,args){
                let  author = new Author({
                    name: args.name,
                    age: args.age
                });
               return author.save();
            }
        },
        addBook : {
            type: BookType,
            args:{
                name: {type:  GraphQLString},
                genre: {type: GraphQLString},
                authorId:{type: GraphQLID}
            },
            resolve(parent,args){
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId

                });
                return book.save();
            }

        }
    }
})

module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation : Mutation
     });