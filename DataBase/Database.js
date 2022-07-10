var mysql = require('mysql2');

class CRUD {
    constructor() {

    }
    con = mysql.createConnection({
        port: '7777',
        user: 'root',
        password: 'FEsoihfjew876AWEFh',
        database: 'mytestserverdb'
    });

    Connect() {
        this.con.connect(function (err) {
            if (err) throw err;
        });
    }

    Create(table, pass, name) {
        this.con.connect(function (err) {
            if (err) throw err;
            console.log('connected to db!');
            if (this.con != undefined) {
                this.con.query(`insert into ${table}(username, pass) values ('${name}', '${pass}')`, function (err) {
                    if (err) throw err;
                    console.log("Query Success!");
                });
            } else {
                console.log("Query Failed");
            }
        });
    }

    Read(table) {
        this.con.connect(function (err) {
            if (err) throw err;
            this.con.query(`select * from ${table}`);
        });
    }

    Update(table, User) {
        this.con.connect(function (err) {
            if (err) throw err;
            this.con.query(`update ${table} set username='${User.user}', pass='${User.pass}' where id=${User.id}`);
        });
    }

    Delete(table, User) {
        this.con.connect(function (err) {
            if (err) throw err;
            this.con.query(`delete from ${table} where id=${User.id}`);
        });
    }
}

module.exports = CRUD;

//CRUD CREATE READ UPDATE DELETE
