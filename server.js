'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', (req, res) => {
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.any(), (req, res) => {
  const { originalname: name, mimetype: type, size} = req.files[0];
  res.json({name, type, size});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});