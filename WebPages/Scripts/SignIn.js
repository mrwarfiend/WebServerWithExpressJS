const { json } = require("express");

async function testSignIn() {
    var email = document.getElementById('exampleInputEmail1').value;
    var pass = document.getElementById('exampleInputPassword1').value;

    var credentials = {
        'email': email,
        'password': pass
    };

    let response = await fetch('http://localhost:8888/SignInCheck', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-type': 'application/json'
        }
    });

}