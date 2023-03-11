// const path = require('path');

// module.exports = {
//   config: path.resolve('src', 'config', 'database.js'),
//   'models-path': path.resolve('src', 'models'),
//   'seeders-path': path.resolve('src', 'seeders'),
//   'migrations-path': path.resolve('src', 'migrations'),
// };

// Import Sequelize
const Sequelize = require('sequelize');

// Inisialisasi Sequelize
const sequelize = new Sequelize('database_movies', 'postgres', 'mengingatMU513', {
  host: 'localhost',
  dialect: 'postgres'
});

// Membuat model untuk tabel movies
const movie = sequelize.define('movies', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genres: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Membuat model untuk tabel users
const user = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Membuat relasi antara tabel movies dan users
movie.belongsToMany(user, { through: 'movieUser' });
user.belongsToMany(movie, { through: 'movieUser' });

// Export model
module.exports = { movie, user };
