const mongoose = require('mongoose')
const CourseSchema = new mongoose.Schema({
    name:{
        type: String,
        Required: true,
    },
    email:{
        type: String,
        Required: true,
    },
    mobile:{
        type: String,
        Required: true,
    },
    address:{
        type:String,
        Required:true,
    },
    gender:{
        type:String,
        Required:true,
    },
    course:{
        type:String,
        Required:true,
    },
    branch:{
        type:String,
        Required:true,
    },
    college:{
        type:String,
        Required:true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
    },


},{timestamps:true})

const CourseModel = mongoose.model('course',CourseSchema);

module.exports = CourseModel