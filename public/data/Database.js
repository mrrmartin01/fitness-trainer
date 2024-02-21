import { createConnection } from 'mysql';

const dbConfig = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'fitness_trainer'
};

const connection = createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    return console.error(err.message);
  }

  console.log("Connected to the MySQL database.");

  // Create the table
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY, 
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

  connection.query(sql, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Table created successfully.");
    }

    connection.end();
  });
});
