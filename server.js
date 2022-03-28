const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 8888;
const path = require('path');

const info = require(path.join(__dirname, "WebPages/info.json"));

app.use(bodyParser.json());

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
app.get('/SignIn.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/SignIn.js'));
})
app.post('/SignInCheck', (req, res) => {
    checkSignIn();
    async function checkSignIn() {
        var credentials = req.body;

        if (info.email == credentials.email && info.password == credentials.password) {
            JSON.stringify(info);
            res.send(info);
            console.log('signed in');
        } else {
            res.send(credentials);
            console.log('wrong credentials');
        }
    }
});

// sign up page
app.get('/SignUp', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/SignUp.html'));
})
app.get('/SignUp.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/SignUp.js'));
})

// test json package
app.get('/Info', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/info.json'));

})

app.listen(port, () => {
    console.log("someone is on port 8888");
})