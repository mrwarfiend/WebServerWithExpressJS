const ogHtmlBody = document.body.innerHTML;

function SignUpProcess() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;

    

    if (fName != '' && lName != '' && email != '' && password != '') {
        document.body.innerHTML = ogHtmlBody;
        document.body.innerHTML += '<h3>You Were Added!</h3>';

    } else {
        document.body.innerHTML = ogHtmlBody;
        document.body.innerHTML += '<h3>try entering it correctly please.</h3>';
    }

}