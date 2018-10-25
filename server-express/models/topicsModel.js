const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codemocracy-dev', { useNewUrlParser: true });
const topicsModel = {};

topicsModel.Topic = mongoose.model( 'Topic', {
  title: String,
  published_at: Date,
  score: Number,
});

topicsModel.getAll = async function () {
  return await topicsModel.Topic.find().sort({ published_at: 'desc' }).exec();
};

topicsModel.create = async function (topic) {  
  const newTopic = {
    title: '',
    published_at: Date.now(),
    score: 0
  }
  Object.assign(newTopic, topic);
  return await topicsModel.Topic.create(newTopic);
};

topicsModel.delete = async function (id) {
  return await topicsModel.Topic.deleteOne({ _id: id});
};

topicsModel.up = async function (id) {
  const topic = await topicsModel.Topic.findById(id);
  await topic.updateOne({ score: topic.score + 1 });
  return await topicsModel.Topic.findById(id);
};

topicsModel.down = async function (id) {
  const topic = await topicsModel.Topic.findById(id);
  await topic.updateOne({ score: topic.score - 1 });
  return await topicsModel.Topic.findById(id);
};

module.exports = topicsModel;