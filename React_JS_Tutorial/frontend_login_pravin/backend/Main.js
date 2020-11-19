const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('./Router');

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());


// Database Connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pravin123',
    database: 'myapp'
});

db.connect( function(err) {
    
    if (err) {
        console.log('DB error');
        throw err;
        return false;
    }
    console.log("Connected!")

});