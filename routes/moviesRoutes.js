const express = require('express');
const movieController = require('../controllers/moviesController');
const router = express.Router();
router.get('/', movieController.index);
router.get('/:id', movieController.show);
router.get('/:id/edit', movieController.edit);
router.get('/add/new', movieController.create);
router.post('/', movieController.store);
router.post('/:id', movieController.update);
router.post('/:id/delete', movieController.destroy);

module.exports = router;
