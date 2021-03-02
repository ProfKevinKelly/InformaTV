const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'elderlyrds.ckkmkhipvst6.eu-west-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'SWENG2021',
    database: 'test'
  })

  connection.connect();
  exports.conn =  connection;