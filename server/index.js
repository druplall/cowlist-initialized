const express = require('express');
const db = require('./db/config');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/cows', (req, res) => {
  //res.send('Testing');
  const connection = new db();
  connection
    .query('SELECT * FROM cows')
    .then((rows) => {
      if (rows) {
        res.send(rows);
      } else {
        console.log('No record');
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/api/cows', (req, res) => {
  //res.send('Testing POST');
  var name = req.body.name;
  var desc = req.body.description;

  const stmt = 'INSERT INTO cows(name,description) VALUES (?,?)';
  const connection = new db();
  connection
    .query(stmt, [name, desc])
    .then((msg) => {
      //console.log(msg);
      // if(msg.)
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
