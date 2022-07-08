const mysql = require('mysql');

var con = mysql.createConnection({
    port: '8888',
    user: 'newuser',
    password: 'newpassword',
    database: 'mytestserverdb'
});

con.connect(function (err) {
    if (err) throw err;
    console.log('connected to db!');
});