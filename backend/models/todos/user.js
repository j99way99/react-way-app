/**
 * User
 */
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxLength: 20
    },
    lastname: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String
    ,token: {
        type:String``
    },
    tokenExp: {
        type: Number
    }
});

const user = mongoose.model('user', userSchema);//모델명, 스키마
module.exports = { user } //다른곳에서 사용가능 하도록 export