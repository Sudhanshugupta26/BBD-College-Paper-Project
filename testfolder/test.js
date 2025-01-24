const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: '104.197.98.28',
  user: 'root',
  password: 'U_*/N<kr8Z5^zaM]',
  database: 'papers'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

const filePath = '1.pdf';

fs.readFile(filePath, (err, pdfData) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const sql = 'INSERT INTO documents (name, pdf_data) VALUES (?, ?)';
  connection.query(sql, ['1.pdf', pdfData], (err, results) => {
    if (err) {
      console.error('Error inserting file into database:', err);
    } else {
      console.log('File inserted with ID:', results.insertId);
    }

    connection.end();
  });
});
