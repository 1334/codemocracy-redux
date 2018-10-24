const mongoose = require('mongoose');
const data = require('./seed-data.json');

mongoose.connect('mongodb://localhost/codemocracy-dev', { useNewUrlParser: true });
const db = {};

db.Topic = mongoose.model( 'Topic', {
  title: String,
  published_at: Date,
  score: Number,
});

db.getAll = async function () {
  return await db.Topic.find().sort({ published_at: 'desc' }).exec();
};

db.create = async function (topic) {
  const newTopic = {
    title: '',
    published_at: Date.now(),
    score: 0
  }
  Object.assign(newTopic, topic);
  return await db.Topic.create(newTopic);
};

db.delete = async function (id) {
  return await db.Topic.deleteOne({ _id: id});
};

db.up = async function (id) {
  const topic = await db.Topic.findById(id);
  await topic.updateOne({ score: topic.score + 1 });
  return await db.Topic.findById(id);
};

db.down = async function (id) {
  const topic = await db.Topic.findById(id);
  await topic.updateOne({ score: topic.score - 1 });
  return await db.Topic.findById(id);
};

db.seed = async function () {
  await db.Topic.deleteMany({});
  data.forEach(async topic => await db.create(topic));
};

module.exports = db;