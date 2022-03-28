const { json, response, response } = require("express");
const bodyparser = require('body-parser');

const originalPage = document.body.innerHTML;

async function testSignIn() {
    var email = document.getElementById('exampleInputEmail1').value;
    var pass = document.getElementById('exampleInputPassword1').value;

    var credentials = {
        'email': email,
        'password': pass,
        'userId': 0
    };

    let response = await fetch('http://localhost:8888/SignInCheck', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-type': 'application/json'
        }
    });

    
   
    console.log(response);

    if (item.userId == 0) {

        document.body.innerHTML += "<h1>Try Again!</h1>";
    } else if (item.userId > 0) {
        document.body.innerHTML = originalPage;
        document.body.innerHTML += "<h1>Signed In!</h1>";
    }

}