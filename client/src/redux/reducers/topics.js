import types from '../actionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.REFRESH_TOPICS:
      return action.topics.sort((e1,e2) => e2.score - e1.score);
    default: return state
  }
}