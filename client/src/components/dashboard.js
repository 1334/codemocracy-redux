import React from 'react';
import { connect } from 'react-redux';

import TopicsList from './topicsList'
import { fetchTopics } from '../redux/actions';

class Dashboard extends React.Component {

  componentDidMount () {
    fetch('http://localhost:4000/topics')
      .then(res => res.json())
      .then(topics => this.props.fetchTopics(topics))
      // .then(topics => console.log(topics))
  }

  render () {
    return (
      <div>
        <h1>Codemocracy's Dashboard</h1>
        <TopicsList topics={this.props.topics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  fetchTopics: topics => dispatch(fetchTopics(topics))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);