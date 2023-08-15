const express = require("express")
const app = express()

app.use(express.static("./methods-public"))

app.use(express.json())

// parse form data
app.use(express.urlencoded({ extended: false }))

const authRouter = require("./routes/auth")
const peopleRouter = require("./routes/people")

app.use("/", authRouter)
app.use("/api/people", peopleRouter)

app.listen(5000, () => {
  console.log("server is listening on port 5000")
})