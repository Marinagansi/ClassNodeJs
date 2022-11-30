const { request } = require('express')
const express= require('express')
const router= express.Router()
const bookController=require('../controllers/books_controller')
router.route('/')
    .get(bookController.getAllBooks)
    .post(bookController.createBook)
    .put(bookController.putBook)
    .delete(bookController.deleteBook)
    router.route('/:id')
    .get(bookController.getBook)
    .put(bookController.UpdateABook)
    .delete(bookController.DeleteABook)
    .post((req,res)=>{
        res.status(501).send({'reply':"not implemented"})
    })

module.exports=router
