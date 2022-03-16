const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel");
// https://www.youtube.com/watch?v=m3WBPb-ZfzQ  01:03

const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose connection
mongoose.connect("mongodb+srv://ihsan:0123456789@cluster0.0ae2p.mongodb.net/books?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Connected to Database"))
.catch((err) => console.log(err));


app.get("/books", (req,res)=>{
    BookStore.find().then(books=>{
        res.json(books);
    })
})
    
app.post("/newbook", async (req,res)=>{
    try {
        const newBook = new BookStore({
            bookName: req.body.bookName,
            author: req.body.author,
            quantity: req.body.quantity,
            department:req.body.department,
            comments: req.body.comments
        })
       const book = await newBook.save();
       res.status(200).json(book);

    } catch (err) {
        console.log(err)
    }
})
app.delete("/delete/:id", (req,res) =>{
const id = req.params.id;
BookStore.findByIdAndDelete({_id:id},(err)=>{
    if(!err){
        console.log("Book Deleted");
    }else{
        console.log(err);
    }
})
})
app.put("/lend/:id", async (req,res)=>{
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:-1}})

    }catch(err){
console.log(err);
    }
})
app.put("/back/:id", async (req,res)=>{
    try{
        await BookStore.findByIdAndUpdate(req.params.id, {$inc:{quantity:+1}})

    }catch(err){
console.log(err);
    }
})

app.listen(5000, () => {
    console.log("Server Calisti");
})