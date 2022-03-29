const { json, response} = require("express");
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
    })
        .then(response => response.json());
        
    console.log(response);

    if (response.userId == 0) {

        document.body.innerHTML += "<h1>Try Again!</h1>";
    } else if (response.userId > 0) {

        document.body.innerHTML += "<h1>Signed In!</h1>";
    }

}