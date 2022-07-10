const exp = require("constants");
var express = require("express");
var path = require("path");

var router = express.Router();

// index or home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/index.html'));
})
router.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/index.js'));
})

// sign in page
router.get('/SignIn', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/SignIn.html'));
})
router.get('/SignIn.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/SignIn.js'));
})
router.post('/SignInCheck', (req, res) => {
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
router.get('/SignUp', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/SignUp.html'));
})
router.get('/SignUp.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/Scripts/SignUp.js'));
})


// test json package
router.get('/Info', (req, res) => {
    res.sendFile(path.join(__dirname, 'WebPages/info.json'));

})



module.exports = router;