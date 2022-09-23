const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');

const checkuserauth = async(req,res,next) =>{
    try{
        const token = req.cookies.jwt;
        if (!token)
        {
            res.redirect('/')
        }
        else{
            const verify = jwt.verify(token,'nishant')
            const user = await UserModel.findOne({_id: verify.userid})
            req.user = user
            next();
        }
    }catch(err){
        console.log(err)
    }
}

const AuthRole = (roles) =>{
    //console.log(roles)
    return(req,res,next) =>{
        console.log(req.user.role)
        console.log(roles)
        if (!roles.includes(req.user.role)){
            return res.redirect('/user/home')
        }
        next()
    } 
}

module.exports = {
    checkuserauth,
    AuthRole
}