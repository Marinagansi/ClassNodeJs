const express=require('express')
const upload=require('../middleware/upload')
const router=express.Router()
const Profile=require('../models/profile')

router.route('/')
.get((req,res,next)=>{
   Profile.find()
   .then(profiles=>{
    res.json(profiles)
   }).catch(next)
})
.post(upload.single('profile'),(req,res,next)=>{
   
    let profile={
        ...req.body,
        image:req.file.filename,
        user:req.user.userId
    }
    Profile.create(profile)
    .then(profile=>{
        res.status(201).json(profile)
    }).catch(next)
})
module.exports=router