// require the module
const mongoose = require('mongoose');
const env = require('dotenv').config();

// require the Schema
const BlogPost = require('./models/blogPost');
const mongourl = require('./env/mongourl');

// connect to the database
// mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true,  useUnifiedTopology: true  });
mongoose.connect(mongourl, { useNewUrlParser: true,  useUnifiedTopology: true  });

var timedPost = setInterval(timer, 10000);

function timer() {

    BlogPost.create(
        {
            title: 'with process.env.MONGO_URL',
            body: 'test push friday 17th'

            // callback on the mongoose.create - nothing fancy here
        }, (error, blogpost) => {
            console.log('error is: ' + error, 'and callback from mongodb is: ' + blogpost);
        });

}


// here we create a document the mongodb using the mongoose method/call create
// BlogPost.create(
//     {
//    title: 'random title is here',
//    body: 'random body text'
//
//         // callback on the mongoose.create - nothing fancy here
//     }, (error, blogpost) => {
//         console.log('error is: ' + error, 'and callback from mongodb is: ' + blogpost);
//     });

// // here we get all the documents in the collection
// BlogPost.find({}, (error, blogspot)=> {
//    console.log('here are all the blogs:',  blogspot);
// });

// // here we search and find a particular blog based on title - the word must match 'second' exactly.
// BlogPost.find({title: 'second' }, (error, blogspot) => {
//     console.log('here is search result for one blog: ', blogspot);
// });

// // here we search and find a particular blog based on title - the word is wildcard.
// BlogPost.find({title: /fir/ }, (error, blogspot) => {
//     console.log('here is search result for one blog: ', blogspot);
// });

// // find by id
// const id = '5e81b583bcf17c0966aca2d7';
// BlogPost.findById(id, (error, blogspot) => {
//    console.log('this was found using special id: ', blogspot);
// });










