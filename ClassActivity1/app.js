const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static("./public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/aboutus.html'))
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost${port}`)
})