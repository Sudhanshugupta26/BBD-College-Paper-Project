const mysql = require('mysql2');
const fs = require('fs');

// Create a connection to the database
const connection = mysql.createConnection({
 host: '104.197.98.28',
  user: 'root',
  password: 'U_*/N<kr8Z5^zaM]',
  database: 'papers'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

// Retrieve the PDF data from the database
const sql = 'SELECT pdf_data FROM documents WHERE id = ?';
const pdfId = 1; // Replace with your PDF ID

connection.query(sql, [pdfId], (err, results) => {
  if (err) {
    console.error('Error fetching PDF from database:', err);
    return;
  }

  if (results.length > 0) {
    const pdfData = results[0].pdf_data;

    // Save the PDF to a file
    fs.writeFile('C:\\Users\\tanay\\Desktop\\Code\\web\\upload\\file.pdf', pdfData, err => {
      if (err) {
        console.error('Error saving PDF file:', err);
      } else {
        console.log('PDF file saved successfully.');
      }

      // Close the connection
      connection.end();
    });
  } else {
    console.log('No PDF found with the specified ID.');
    connection.end();
  }
});
