const UserModel = require('../models/User')
const CourseModel = require('../models/Course')

class frontcontroller{
    static homepage = async(req,res) => {
        const{name,email,_id} = req.user
        const btech = await CourseModel.findOne({user:_id,course: 'BTECH selected'})
        const mca = await CourseModel.findOne({user:_id,course: 'MCA selected'})
        const mba = await CourseModel.findOne({user:_id,course: 'MBA selected'})
        res.render('admin/home', {n: name, e: email, b: btech, m: mca, mb: mba})
    }
    static aboutpage = async(req,res) =>{
        const{name,email} = req.user
        res.render('about',{n: name, e: email})   
    }
    static facultypage = async(req,res) =>{
        const{name,email} = req.user
        res.render('faculty',{n: name, e: email})
    }
    static coursepage = async(req,res) =>{
        const{name,email,_id} = req.user
        const btech = await CourseModel.findOne({user:_id,course: 'BTECH selected'})
        const mca = await CourseModel.findOne({user:_id,course: 'MCA selected'})
        const mba = await CourseModel.findOne({user:_id,course: 'MBA selected'})
        res.render('course',{n: name, e: email,b: btech, m: mca, mb: mba})   
    }
    static contactpage = async(req,res) =>{
        const{name,email} = req.user
        res.render('contact',{n: name, e: email})   
    }
     
}

module.exports = frontcontroller