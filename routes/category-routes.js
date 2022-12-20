const express= require('express')
const router= express.Router()
const CategoryController=require('../controllers/categories_controller')


router.route('/')
.get(CategoryController.getAllCategory)
.put((req, res)=>res.status(501).json({"reply":"Not implmented"}))
.post(CategoryController.createAllCategory)
.delete(CategoryController.deleteAllCategory)


router.route('/:category_id')
.get(CategoryController.getCategoryById)
.put(CategoryController.updateById)
.post((req, res)=>res.status(501).json({"reply":"not implmented"}))
.delete(CategoryController.deleteById)

module.exports=router 

