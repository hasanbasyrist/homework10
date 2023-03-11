const express = require('express');
const multer = require('multer');
const path =require('path');
const moviesRepository = require('../repositories/moviesRepository');
const router = express.Router();
// Konfigurasi penyimpanan file dengan multer
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
  }).single('photo');
  
  // Check File Type
  function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
  };
  
  router.post('/movies', upload, (req, res) => {
    const newMovie = {
        title: req.body.title,
        genres: req.body.genres,
        year: req.body.year,
        photo: req.file.filename
    };
    moviesRepository.create(newMovie);
    res.redirect('/movies');
});
  module.exports = {upload}