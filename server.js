const express = require("express");
const app = express();
const port = 8888;

const path = require('path');


// index or home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/index.html'));
})
app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/index.js'));
})

// sign in page
app.get('/SignIn', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/SignIn.html'));
})


app.listen(port, () => {
    console.log("someone is on port 8888");
})