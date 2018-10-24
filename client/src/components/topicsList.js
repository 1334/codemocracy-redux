import React from 'react';

import Topic from './topic';

export default class TopicsList extends React.Component {
  render () {
    return (
      topics.map(el => <Topic topic={el} />)
    );
  }
}

const topics = [1,2,3,4,5];