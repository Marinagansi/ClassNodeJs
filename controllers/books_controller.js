//const books=require('../data/books')

const Book=require('../models/Book')

const getAllBooks=(req, res)=>{
    Book.find()
    .then((books)=>{
        res.json(books)
    }).catch((err)=>console.log(err))
    //res.json(books)
   // res.send("Return all books")
}

const createBook=(req, res)=>{
    Book.create(req.body)
        .then((book)=>{
            res.status(201).json(book)
        }).catch((err)=>console.log(err))


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
const deleteBook=(req, res)=>{
    res.json({})
}
const getBook=(req, res)=>{
    the_book=books.find((item)=>item.id==req.params.id)
    if(!the_book)res.status(404).json({"reply":"NOT FOUND"})
    res.json(the_book)
}

const UpdateABook=(req, res)=>{
    //map:- get particular item feature from list
   let updateBooks = books.map((item)=>{
        if (item.id==req.params.id){
            item.title=req.body.title,
            item.author=req.body.author
        }
        return item
    })
    res.json('updateBooks')
}

const DeleteABook=(req, res)=>{
    the_book=books.filter((item)=>item.id!=req.params.id)
    res.json(the_book)
}


module.exports={
    getAllBooks,createBook,putBook, deleteBook, getBook, UpdateABook,
    DeleteABook
}