const mongoose = require('mongoose');

const con = "mongodb://nishant:123@ac-wxayd4e-shard-00-00.j0bn8qj.mongodb.net:27017,ac-wxayd4e-shard-00-01.j0bn8qj.mongodb.net:27017,ac-wxayd4e-shard-00-02.j0bn8qj.mongodb.net:27017/addportal?ssl=true&replicaSet=atlas-xv2jy6-shard-0&authSource=admin&retryWrites=true&w=majority"

const cdb =()=>{
    //return mongoose.connect('mongodb://localhost:27017/portal_project')   
    return mongoose.connect(con) 
    .then(()=>{
        console.log("Connection Sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = cdb