var bodyParser = require("body-parser");
var express = require("express"); 
var path = require('path');
var Crud = require("./DataBase/Database.js");
var routes = require("./Routes.js");

const port = 8888;

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
    console.log("someone is on port 8888");
})