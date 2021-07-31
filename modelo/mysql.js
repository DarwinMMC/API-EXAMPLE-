const mysql = require('mysql')

const connection = mysql.createConnection({
  host : 'futbol.c3toupentixb.us-east-1.rds.amazonaws.com',
  user : 'darwin',
  password : '1234567890',
  database : 'futbol'
});
 
module.exports = connection;