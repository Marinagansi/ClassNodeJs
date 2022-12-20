const mongoose =require('mongoose')

const categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'category name is rrequired']
        
    },
    books:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Book '
    }]
})
module.exports=mongoose.model('Category',categorySchema)