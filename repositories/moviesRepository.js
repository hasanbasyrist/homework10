const Movie = require('../models/movie');

class MovieRepository {
  getAll() {
    return Movie.findAll();
  }

  getById(id) {
    return Movie.findByPk(id);
  }

  create(movie) {
    return Movie.create(movie);
  }

  update(id, movie) {
    return Movie.update(movie, { where: { id: id } });
  }

  delete(id) {
    return Movie.destroy({ where: { id: id } });
  }
}

module.exports = new MovieRepository();
