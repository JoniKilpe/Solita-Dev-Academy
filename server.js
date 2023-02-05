// Express.js file. Backend.
const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/api", (req, res) => {
    res.render("index")
})

app.listen(3000, () => {console.log("Server has started on the port 3000")})
