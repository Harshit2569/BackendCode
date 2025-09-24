// const mysql = require("mysql2");

// // Create a connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,      // your MySQL host, e.g., localhost
//   user: process.env.DB_USER,      // MySQL username
//   password: process.env.DB_PASS,  // MySQL password
//   database: process.env.DB_NAME,  // Database name: mydb
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// // Export promise-based pool
// module.exports = pool.promise();


const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',  // important: use empty string if no password
  database: process.env.DB_NAME || 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();
