const Book= require('../models/Book')
const getAllReviews=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
        res.json(book.reviews)
    }).catch(next)
}
const createReviews=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
    book
    .reviews.push(req.body)
    book.save().then((b)=>res.status(201).json(b.reviews))
    }).catch(next)
    
}
const deleteAllReviews=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
        book.reviews=[]
        book.save()
        .then(b=>res.json(b.reviews))
        
    }).catch(next)
}


const getReviewById=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
       let review= book.reviews
       .find((item)=>item.id==req.params.review_id)
       res.json(review)
    }).catch(next)
}

const updateReviewById=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
        let updatedReviews=book.reviews.map((item)=>{
            if (item.id==req.params.review_id){
                item.body=req.body.body
            }
            return item
        })
         
        book.reviews=updatedReviews
        book.save().then(b=>res.json(b.reviews))
        
        
    }).catch(next)
}


const deleteAReview=(req, res, next)=>{
    Book.findById(req.params.id)
    .then((book)=>{
        let Reviews=book.reviews.filter((item)=>{
            return item.id!=req.params.review_id
        })
        book.reviews=Reviews
        book.save().then(b=>res.json(b.reviews))
        
        
    }).catch(next)
}
module.exports={
    getAllReviews,
    createReviews,
    deleteAllReviews,
    deleteAReview,
    getReviewById,
    updateReviewById
}

