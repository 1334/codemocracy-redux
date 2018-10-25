const express = require('express');
const app = express();
const topicsController = require ('./controllers/topicsController');
const bodyParser = express.json();
const cors = require ('cors');

app.use(cors());
app.use(bodyParser);
app.get ('/topics', topicsController.getAll)
app.post ('/topics', topicsController.createTopic)
app.put ('/topics/:id/up', topicsController.upvote)
app.put ('/topics/:id/down', topicsController.downvote)
app.delete ('/topics/:id', topicsController.deleteTopic)

app.listen(4000);