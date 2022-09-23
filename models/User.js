const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        Required: true,
    },
    email:{
        type:String,
        Required:true,
    },
    password:{
        type:String,
        Required:true,
        unique:true,
    },
    role: {
        type: String,
        default: 'student'
    }
},{timestamps:true})

const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel