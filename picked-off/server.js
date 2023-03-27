const express = require("express")
const app = express()

app.use(express.json())

app.use("/data", (req, res, next) => {
    console.log("middleware is firing")
    next()
})

app.use("/data", require("./routes/dataRouter.js"))


app.listen(7000, () =>{
    console.log("Port is running on 7000")
})
