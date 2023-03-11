const User = require('../models/user');

class UserRepository {
  async getAll() {
    return User.findAll();
  }

  getById(id) {
    return User.findByPk(id);
  }

  getByEmail(email) {
    return User.findOne({ where: { email: email } });
  }

  create(user) {
    return User.create(user);
  }

  update(id, user) {
    return User.update(user, { where: { id: id } });
  }

  remove(id) {
    return User.destroy({ where: { id: id } });
  }
}

module.exports = new UserRepository();
