const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5921fadbfaa55c188e3a5273'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5921fadbfaa55c188e3a5273').then((todo) => {
    console.log(todo);
});
