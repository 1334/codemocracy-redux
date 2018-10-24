
const topics = require('../models/topicsModel');

const topicsController = {};

topicsController.getAll = async function (ctx) {
  ctx.body = await topics.getAll();
  ctx.status = 200;
};

topicsController.createTopic = async function (ctx) {
  await topics.create(ctx.request.body);
  ctx.status = 201;
};

topicsController.deleteTopic = async function (ctx) {
  await topics.delete(ctx.params.id);
  ctx.status = 204;
};

topicsController.upvoteTopic = async function (ctx) {
  ctx.body = await topics.up(ctx.params.id);
  ctx.status = 200;
};

topicsController.downvoteTopic = async function (ctx) {
  ctx.body = await topics.down(ctx.params.id);
  ctx.status = 200;
};


module.exports = topicsController;