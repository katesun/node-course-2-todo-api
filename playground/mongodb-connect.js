// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true} ,(error, client) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert todo', error);
    //     }

    //     // ops stores all of the documents that were inserted
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // Insert new doc into Users collection (name, age, location)

    db.collection('Users').insertOne({
        name: 'Kate',
        age: 26, 
        location: 'Toronto'
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user', error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    client.close();
});