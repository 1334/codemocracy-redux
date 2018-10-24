import types from '../actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.FETCH_TOPICS:
      return [...action.topics].sort((e1,e2) => e2.score - e1.score);
    case types.ADD_TOPIC:
      return [...state, action.topic].sort((e1,e2) => e2.score - e1.score);
    case types.DELETE_TOPIC:
      return state.filter(topic => topic._id !== action.id);
    case types.UPVOTE_TOPIC:
      return state.map(topic => {
        if (topic._id === action.id)
          return Object.assign({}, topic, { score: topic.score + 1});
        else return topic;
      });
    case types.DOWNVOTE_TOPIC:
      return state.map(topic => {
        if (topic._id === action.id)
          return Object.assign({}, topic, { score: topic.score - 1});
        else return topic;
      });
    default: return state
  }
}