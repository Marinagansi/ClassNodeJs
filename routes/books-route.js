const { request } = require('express')
const express= require('express')
const router= express.Router()
const bookController=require('../controllers/books_controller')
const reviewController=require('../controllers/reviews_controller')
const { verifyUser , VerifyAdmin}=require('../middleware/auth')
router.route('/')
    .get(bookController.getAllBooks)
    .post(verifyUser,bookController.createBook)
    .put(bookController.putBook)
    .delete(verifyUser, VerifyAdmin,bookController.deleteBook)

router.use(verifyUser).route('/:id')
    .get(bookController.getBookById)
    .put(bookController.UpdateABookById)
    .delete(bookController.DeleteABookById)
    .post((req,res)=>{
        res.status(501).send({'reply':"not implemented"})
    })

router.use(verifyUser).route('/:id/reviews')
    .get(reviewController.getAllReviews)
    .post(reviewController.createReviews)
    .put((req, res)=>res.status(501).json({'reply':'not implemented'}))
    .delete(VerifyAdmin,reviewController.deleteAllReviews)
    
router.route('/:id/reviews/:review_id')
    .get(reviewController.getReviewById)
    .put(verifyUser,reviewController.updateReviewById)
    .post((req, res)=>res.status(501).json({'reply':'not implemented'}))
    .delete(verifyUser,reviewController.deleteAReview)
module.exports=router
rou