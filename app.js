const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { size: null, name: null });
});

app.post('/upload', upload.single('fileFromClient'), (req, res) => {
  const { size, originalname: name } = req.file;
  res.render('index', { size, name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Sever is running on port', PORT);
});
