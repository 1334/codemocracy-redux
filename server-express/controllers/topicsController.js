const topicsController = {};
const topicsModel = require ('../models/topicsModel');

topicsController.getAll = async function(req, res) {
  res.status(200)
  res.send(await topicsModel.getAll());
}

topicsController.createTopic = async function(req, res) {  
  await topicsModel.create(req.body)
  res.status(201)
  res.send(await topicsModel.getAll());
}

topicsController.upvote = async function(req, res) {
  await topicsModel.up (req.params.id)
  res.status(202)
  res.send(await topicsModel.getAll());
}

topicsController.downvote = async function(req, res) {
  await topicsModel.down (req.params.id)
  res.status(202)
  res.send(await topicsModel.getAll());
}

topicsController.deleteTopic = async function(req, res) {
  await topicsModel.delete (req.params.id)
  res.status(202)
  res.send(await topicsModel.getAll());
}

module.exports = topicsController;