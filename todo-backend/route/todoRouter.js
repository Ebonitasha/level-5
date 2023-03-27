const express = require("express")
const todoRouter = express.Router()
const {v4:uuidv4} = require('uuid')

const weddingTodo = [
    {Title: "hair", description: "bridal hair", imageUrl:"" , completed:"no", _id:uuidv4()},
    {Title: "manicure", description: "wedding nails", imageUrl:"" , completed:"no", _id:uuidv4()},
    {Title: "pedicure", description: "wedding toes", imageUrl:"" , completed:"no", _id:uuidv4()},
    {Title: "makeup", description: "flawless look", imageUrl:"" , completed:"no", _id:uuidv4()},
    {Title: "dress", description: "wedding dress", imageUrl:"" , completed:"yes", _id:uuidv4()},
    {Title: "shoes", description: "wedding shoes", imageUrl:"" , completed:"yes", _id:uuidv4()}
]
// get all 
todoRouter.get("/", (req, res) =>{
    res.send(weddingTodo)
})
// get one
todoRouter.get("/:weddingTodoId", (req,res) =>{
    // console.log(req.params.weddingTodoId)
    const weddingTodoId = req.params.weddingTodoId
    const foundTodo = weddingTodo.find(item => item._id === weddingTodoId)
    res.send(foundTodo)
})
// post one
todoRouter.post("/", (req,res) =>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    weddingTodo.push(newTodo)
    res.send("new todo was added")
})

// delete one 
todoRouter.delete("/:weddingTodoId", (req,res)=>{
    const weddingTodoId = req.params.weddingTodoId
    const toDoIndex = weddingTodo.findIndex(item => item._id === weddingTodoId)
    weddingTodo.splice(toDoIndex, 1)
    res.send("item was deleted")
})
// put 
todoRouter.put("/:weddingTodoId", (req,res) =>{
    const weddingTodoId = req.params.weddingTodoId
    const updateItem = req.body
    const weddingTodoIndex = weddingTodo.findIndex(item => item._id === weddingTodoId)
    const updatedTodo = Object.assign(weddingTodo[weddingTodoIndex], updateItem)
    res.send(updatedTodo)
    
})
module.exports = todoRouter