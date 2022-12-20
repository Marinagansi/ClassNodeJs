//const books=require('../data/books')

const Book=require('../models/Book')

const getAllBooks=(req, res,next)=>{
    Book.find()
    .then((books)=>{
        res.json(books)
    }).catch((err)=>next(err))
    //res.json(books)
   // res.send("Return all books")
}

const createBook=(req,res,next)=>{
let book={
    'title':req.body.title,
    'author':req.body.author

}

    Book.create(req.body)
        .then((book)=>{
            res.status(201).json(book)
        }).catch((err)=>next(err))


    // let new_book={
    //     'id':books[books.length-1].id + 1,
    //     'title':req.body.title,
    //     'author':req.body.author
    // }
    // books.push(new_book)
    // res.status(201).send(books)
}

const putBook=(req, res)=>{
    res.status(501).json({"reply":"put request not supported"})
    }
const deleteBook=(req, res,next)=>{
    Book.deleteMany()
    .then((reply)=>{
        res.json(reply)
    }).catch(next)
}
const getBookById=(req, res, next)=>{
    Book.findById(req.params.id)
    .populate('category')
    .then((book)=>{
        res.json(book)
    }).catch(next)

    // the_book=books.find((item)=>item.id==req.params.id)
    // if(!the_book)res.status(404).json({"reply":"NOT FOUND"})
    // res.json(the_book)
}

const UpdateABookById=(req, res,next)=>{
    //map:- get particular item feature from list
    Book.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    .then((book)=>{
        res.json(book)
    }).catch(next)

//    let updateBooks = books.map((item)=>{
//         if (item.id==req.params.id){
//             item.title=req.body.title,
//             item.author=req.body.author
//         }
//         return item
//     })
//     res.json('updateBooks')
}

const DeleteABookById=(req, res,next)=>{
    Book.findOneAndDelete(req.params.id)
    .then((reply)=>{
        res.json(reply)
    }).catch(next)

    // the_book=Book.filter((item)=>item.id!=req.params.id)
    // res.json(the_book)
}


module.exports={
    getAllBooks,createBook,putBook, deleteBook, getBookById, UpdateABookById,
    DeleteABookById
}