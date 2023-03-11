const express = require('express');
const app = express();
const router = express.Router();
const { sequelize } = require('./config/database');
const movieRoutes = require('./routes/moviesRoutes.js');
const userRoutes = require('./routes/usersRoutes.js');
const Movie = require('./models/movie');
const uploadRouters =require('./routes/upload')
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
// app.use(uploadRouters);
app.use('/movies', movieRoutes);
app.use('/users', userRoutes);


sequelize
  .sync()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.log('Error: ' + err));

app.listen(3000, () => console.log('Server running on port 3000...'));
