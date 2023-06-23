const express = require('express');
const usersController = require('../controllers/users');
// const sampleUser = require('../data/sampleUser');

const router = express.Router();

router.get('/users', usersController.list);
router.get('/users/:id', usersController.show);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
