const express = require("express")
const nodemon = require("nodemon")

const app = express()

app.use(express.json)

app.listen(3333, () => {
    console.log("Rodando...")
})