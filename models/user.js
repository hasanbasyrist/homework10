const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database_movies', 'postgres', 'mengingatMU513', {
  host: 'localhost',
  dialect: 'postgresql',
});

const User = sequelize.define('users', {
  // definisi kolom-kolom tabel User
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  },

},
{
  timestamps: true,
});

module.exports = User;
