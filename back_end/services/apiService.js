const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'elderlyrds.ckkmkhipvst6.eu-west-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'SWENG2021',
    database: 'test'
  })
async function getTest(){
    connection.connect();

    connection.query('SELECT * FROM test.testTable', function (error, results, fields) {
      if (error) throw error;
      console.log('Fetched from database: ', results);
    });
     
    connection.end();
}

module.exports = {
    getTest
}
