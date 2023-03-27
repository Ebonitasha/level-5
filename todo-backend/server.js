const express = require("express")
const app = express()

app.use(express.json())

app.use("/weddingTodo", require("./route/todoRouter.js"))

app.listen(7000, () =>{
    console.log("port running on 7000")
})