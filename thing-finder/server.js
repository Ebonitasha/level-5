const express = require("express")
const app = express()

app.use(express.json())

app.use("/produce", require ("./routes/produceRouter.js"))


app.listen(8000, () =>{
    console.log("port 8000 is running")
})