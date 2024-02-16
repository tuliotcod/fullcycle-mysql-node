const mysql = require('mysql');
const express = require('express');

const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};



async function insertPeople(connection) {
  const nameGenerator = require('gerador-nome');
  const name = nameGenerator.geradorNome();
  
  const sql = `INSERT INTO people(name) values('${name}')`;
    
  connection.query(sql);
  console.log(`${name} inserted.`);    
}

app.get('/', async (_, res) => {
  const connection = mysql.createConnection(config);

  await insertPeople(connection);
  
  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    if (error) throw error

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${results.map(r => `<li>${r.name}</li>`).join('')}
        </ul>
      `)
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});