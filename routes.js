const express = require('express');
const routes = express();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

//Controllers go here :)
const imageController = require('./controllers/imageController');

routes.post('/image-upload', upload.single('file'), imageController.post)
routes.get('/test', function(req, res){
  res.send('hello World!')
})

module.exports = routes;
