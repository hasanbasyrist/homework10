const userRepository = require('../repositories/usersRepository');

const index = async (req, res) => {
  const users = await userRepository.getAll();
  res.render('users/index', { users });
};

const show = async (req, res) => {
  const id = req.params.id;
  const user = await userRepository.getById(id);
  res.render('users/show', { user });
};

const create = async (req, res) => {
  console.log(req,">>>>>>");
  res.render('users/create');
};

const store = async (req, res) => {
  const data = req.body;
  await userRepository.create(data);
  res.redirect('/users');
};

const edit = async (req, res) => {
  const id = req.params.id;
  const user = await userRepository.getById(id);
  res.render('users/edit', { user });
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  await userRepository.update(id, data);
  res.redirect('/users');
};

const destroy = async (req, res) => {
  const id = req.params.id;
  await userRepository.remove(id);
  res.redirect('/users');
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