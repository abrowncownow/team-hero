// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config()
// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: 'team_db'
  },
  console.log(`Connected to the team_db database.`)
);

db.connect((err) => {
  if (err){
    throw err;
  }
});
module.exports = db;