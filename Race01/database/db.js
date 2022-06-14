const mysql = require('mysql');

var options = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'project',
    port:'3306',
    multipleStatements: true
});
options.connect();


module.exports = options;