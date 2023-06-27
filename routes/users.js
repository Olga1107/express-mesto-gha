const usersRout = require('express').Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateUserAvatar,
} = require('../controllers/users');

usersRout.get('/', getUsers);
usersRout.get('/:userId', getUser);
usersRout.post('/', createUser);
usersRout.patch('/me', updateUser);
usersRout.patch('/me/avatar', updateUserAvatar);

module.exports = usersRout;
