// controllers/moviesController.js
const movieRepository = require('../repositories/moviesRepository');

const index = async (req, res) => {
  const movies = await movieRepository.getAll();
  res.render('movies/index', { movies });
};

const show = async (req, res) => {
  const id = req.params.id;
  const movie = await movieRepository.getById(id);
  res.render('movies/show', { movie });
};

const create = async (req, res) => {
  res.render('movies/create');
};

const store = async (req, res) => {
  const data = req.body;
  await movieRepository.create(data);
  res.redirect('/movies');
};

const edit = async (req, res) => {
  const id = req.params.id;
  const movie = await movieRepository.getById(id);
  res.render('movies/edit', { movie });
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await movieRepository.update(id, data);
  res.redirect('/movies');
};

const destroy = async (req, res) => {
  const id = req.params.id;
  await movieRepository.delete(id);
  res.redirect('/movies');
};

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy
};