const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// removes everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// removes first match and returns the one removed
Todo.findOneAndRemove({_id: '5b156f014573241548affef3'}).then((todo) => {

});

Todo.findByIdAndRemove('5b156f014573241548affef3').then((todo) => {
    console.log(todo);
});