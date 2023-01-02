const mongoose =require('mongoose')

const profileSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timeStamps:true})
module.exports=mongoose.model('Profile',profileSchema)

//Multer is a node.js middleware for handling multipart/form-data,
// which is primarily used for uploading files