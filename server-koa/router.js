const Router = require('koa-router');
const router = new Router();
const topicsController = require('./controllers/topicsController');

router
  .get('/topics', topicsController.getAll)
  .post('/topics', topicsController.createTopic)
  .delete('/topics/:id', topicsController.deleteTopic)
  .put('/topics/:id/up', topicsController.upvoteTopic)
  .put('/topics/:id/down', topicsController.downvoteTopic);

module.exports = router;