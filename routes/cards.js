const cardsRout = require('express').Router();
const {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
} = require('../controllers/cards');

cardsRout.get('/', getCards);
cardsRout.post('/', createCard);
cardsRout.delete('/:cardId', deleteCard);
cardsRout.put('/:cardId/likes', putLike);
cardsRout.delete('/:cardId/likes', deleteLike);

module.exports = cardsRout;
