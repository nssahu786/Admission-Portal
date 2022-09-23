const UserModel = require('../../models/User');
const CourseModel = require('../../models/Course')

class admincontroller{
    static dashboard = async(req,res) =>{
        const{name,email} = req.user
        res.render('admin/dashboard',{n: name,e: email});
    }
    static displaydata = async(req,res) =>{
        const{name,email} = req.user
        const result = await CourseModel.find()
        res.render('admin/displaydetail',{data:result,n: name,e: email});
    }
    static displayregisteruser = async(req,res) =>{
        try{
          const result = await UserModel.find()
          //console.log(result)
          const{name,email} = req.user
          res.render('admin/displaydetail',{data:result,n: name,e: email});
        } catch(err){
          console.log(err)
        }
      }
}
module.exports = admincontroller