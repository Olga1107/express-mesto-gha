const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const usersRout = require('./routes/users');
const cardsRout = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
});

app.use((req, res, next) => {
  req.user = {
    _id: '649ae98facc2aab96e93e2fa',
  };
  next();
});

app.use('/users', usersRout);
app.use('/cards', cardsRout);
app.use('/*', (req, res) => {
  res.status(404).send({ message: '404 — запрашиваемый ресурс не найден' });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Ошибка на сервере ${PORT}`);
  }
});
