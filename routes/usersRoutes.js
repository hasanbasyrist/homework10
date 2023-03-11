const express = require('express');
const userController = require('../controllers/usersController');
const router = express.Router();

router.get('/', userController.index);
router.get('/:id', userController.show);
router.get('/:id/edit', userController.edit);
router.get('/add/new', userController.create);
router.post('/', userController.store);
router.post('/:id', userController.update);
router.post('/:id/delete', userController.destroy);

module.exports = router;


