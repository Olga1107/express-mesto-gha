const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRout = require('./routes/users');
const cardsRout = require('./routes/cards');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signin', login);
app.post('/signup', createUser);

app.use(auth);
app.use('/users', usersRout);
app.use('/cards', cardsRout);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Ошибка на сервере ${PORT}`);
  }
});

app.use('/*', (req, res) => {
  res.status(404).send({ message: '404 — запрашиваемый ресурс не найден' });
});
