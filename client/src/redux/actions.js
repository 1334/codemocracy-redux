import types from './actionTypes';

export function fetchTopics (topics) {
  return {
    type: types.FETCH_TOPICS,
    topics
  }
}

export function addTopic (topic) {
  return {
    type: types.ADD_TOPIC,
    topic:  topic
  }
}

export function deleteTopic (id) {
  return {
    type: types.DELETE_TOPIC,
    id
  }
}

export function upvote (id) {
  return {
    type: types.UPVOTE_TOPIC,
    id
  }
}

export function downvote (id) {
  return {
    type: types.DOWNVOTE_TOPIC,
    id
  }
}
