const ContactModel = require('../models/Contact');

class contactcontroller{
    static contactinsert = async(req,res) =>{
        //console.log(req.body)
        try{
            const{name,email,subject,message} = req.body
            const result = new ContactModel({
               name: name,
               email: email, 
               subject: subject,
               message: message
            })
            await result.save()
            res.redirect('/user/contact')
        }catch(err){
            console.log(err)
        }
    }
    static displaycontact = async(req,res) =>{
        const{name,email} = req.user
        const result = await ContactModel.find()
        //console.log(result)
        res.render('contact/displaycontact',{data: result,n: name,e: email});
    }
    static viewcontact = async(req,res) =>{
        try{
             //console.log(req.params.id)
            const result = await ContactModel.findById(req.params.id)
            //console.log(result)
            const{name,email} = req.user
            res.render('contact/viewcontact',{data:result,n: name, e: email})
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = contactcontroller