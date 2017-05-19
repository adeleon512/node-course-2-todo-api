const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require ('./../server/models/user');

// var id = '591bb574b122ce102a575c1911';
//
// if (!ObjectId.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found.');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

//591b8afbf97a76a81015fda5
//User.findById
//handla user not found, user found, and errors

var userId = '591b8afbf97a76a81015fda5';

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found with supplied id.');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log(e)
});