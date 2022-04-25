const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://user:pass@stockanalyzer.vyh9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
// const db = require('_helpers/db');
// const userService = require('./user.service');

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
// var User = mongoose.model("User", schema);


// db.User.create({schema})

module.exports = mongoose.model('User', schema);