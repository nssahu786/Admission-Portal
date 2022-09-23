const UserModel = require('../models/User')
const CourseModel = require('../models/Course')
class coursecontroller{
    static courseregister = async(req,res) =>{
        const{name,email} = req.user
        res.render('course/courseregister',{n: name, e: email});
    }
    static mcaregister = async(req,res) => {
        const{name,email} = req.user
        res.render('course/mcacourse',{n: name, e: email});
    }
    static mbaregister = async(req,res) => {
        const{name,email} = req.user
        res.render('course/mbacourse',{n: name, e: email});
    }
    static courseinsert = async(req,res) =>{
        //console.log("inserted data")
        try{
            const{name,email,mobile,address,gender,course,branch,college} = req.body
            const result = new CourseModel({
               name: name,
               email: email, 
               mobile: mobile,
               address: address,
               gender: gender,
               course: course,
               branch: branch,
               college: college,
               user: req.user.id
            })
            await result.save()
            // res.redirect('/course/register')
            res.redirect('/userdetail/displaydashboard')
        }catch(err){
            console.log(err)
        }
    }
    static coursedisplay = async(req,res) => {
        //console.log("DISPLAY")
        try{
            const {_id} = req.user
            const result = await CourseModel.find({user: _id})
            //console.log(result)
            const{name,email} = req.user
            res.render('course/dashboard',{data:result,n: name, e: email})
        }catch(err){
            console.log(err)
        }
    }
    static courseview = async(req,res) => {
        //console.log(req.params.id)
        try{
            const result = await CourseModel.findById(req.params.id)
            //console.log(result)
            const{name,email} = req.user
            res.render('course/detail',{data:result,n: name, e: email})
        }catch(err){
            console.log(err)
        }
    }
    static courseedit = async(req,res) => {
        //console.log(req.params.id)
        try{
            const result = await CourseModel.findById(req.params.id)
            //console.log(result)
            const{name,email} = req.user
            res.render('course/editdetail',{data:result,n: name, e: email})
            }catch(err) 
        {
            console.log(err)
        }
    }
    static courseupdate = async(req,res) => {
        //console.log(req.params.id)
        //console.log(req.body)
        try{
            const result = await CourseModel.findByIdAndUpdate(req.params.id,{
                name: req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                address: req.body.address
            })
            //console.log(result)
            res.redirect('/userdetail/displaydashboard')
        }
        catch(err){
            console.log(err)
        }
    }
    static deletedata = async(req,res) =>{
        //console.log(req.params.id)
        //console.log(req.body)
        try{
            const result = await CourseModel.findByIdAndDelete(req.params.id)
            //console.log(result)
            const{name,email} = req.user
            res.render('admin/displaydetail',{data:result,n: name, e: email});
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = coursecontroller