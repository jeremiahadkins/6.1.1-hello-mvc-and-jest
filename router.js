let express = require('express');
let HomeController = require('./controllers/home');
let PostController = require('./controllers/post');

module.exports = ((app) => {
  const homeRouter = express.Router();
  const postRouter = express.Router();

  homeRouter.get('/', HomeController.index);
  homeRouter.get('/about/', HomeController.about);
  homeRouter.get('/contact/', HomeController.contact);

  postRouter.get('/', PostController.list);
  postRouter.get('/:id', PostController.detail);
  // postRouter.get('/:id', PostController.detail);

  app.use('/', homeRouter);
  app.use('/post', postRouter);
});
