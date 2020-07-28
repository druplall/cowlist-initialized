const mysql = require('mysql');

class db {
  constructor() {
    this.connection = mysql.createConnection({
      user: 'root',
      password: 'root',
      database: 'cowlist',
    });

    this.connection.connect((err) => {
      if (err) {
        console.log('Error');
      } else {
        console.log('Connection established');
      }
    });
  }

  query(sql, param) {
    return new Promise((resolved, reject) => {
      this.connection.query(sql, param, (error, rows) => {
        if (error) {
          return reject(error);
        } else {
          resolved(rows);
        }
      });
    });
  }
}

module.exports = db;
