const Category= require('../models/category')


const getAllCategory=(req, res,next)=>{
    Category.find()
    .then((category)=>{
        res.json(category)
    }).catch(next)

}
const createAllCategory=(req, res,next)=>{
    
        Category.create(req.body)
            .then((category)=>{
                res.status(201).json(category)
            }).catch(next)
    

}

const deleteAllCategory=(req, res,next)=>{
    Category.deleteMany()
    .then(reply=>res.json(reply))
    .catch(next)

}

const getCategoryById=(req, res, next)=>{
    Category.findById(req.params.category_id)
    .populate('books')
    .then((item)=>{
        res.json(item)
    }).next
    
}
const updateById=(req, res, next)=>{
    Category.findById(req.params.category_id)
    Category.findByIdAndUpdate(req.params.category_id,{$set:req.body},{new:true})
    .then((category)=>{
        res.json(category)
    }).catch(next)
}

const deleteById = (req,res,next)=>{
    Category.findByIdAndDelete(req.params.category_id)
    .then(category=>
        res.json(category))
        .catch(next)


}

module.exports={
    createAllCategory,
    getAllCategory,
    deleteAllCategory,
    getCategoryById,
    updateById,
    deleteById
}