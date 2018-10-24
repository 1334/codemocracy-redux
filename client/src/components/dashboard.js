import React from 'react';

import TopicsList from './topicsList'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>Codemocracy's Dashboard</h1>
        <TopicsList />
      </div>
    );
  }
}