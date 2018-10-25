import React from 'react';
import { connect } from 'react-redux';

import TopicsList from './topicsList'
import { fetchTopics, addTopic } from '../redux/actions';

class Dashboard extends React.Component {

  state = {
    titleText: ''
  };

  componentDidMount () {
    fetch('http://localhost:4000/topics')
      .then(res => res.json())
      .then(topics => this.props.fetchTopics(topics));
  }

  addTopic () {
    console.log(JSON.stringify({ title: this.state.titleText }));
    fetch('http://localhost:4000/topics', {
      method: 'POST',
      body: JSON.stringify({ title: this.state.titleText })
    }).then(res => res.json())
      .then(topics => this.props.fetchTopics(topics));
    this.setState({ titleText: '' });
  }

  render () {
    return (
      <div>
        <h1>Codemocracy's Dashboard</h1>
        <input type="text"
          placeholder="add topic"
          value={this.state.titleText}
          onChange={e => this.setState({ titleText: e.target.value })} />
        <button type="submit" onClick={() => this.addTopic()}>Add topic</button>
        <br/><br/>
        <TopicsList topics={this.props.topics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics
});

const mapDispatchToProps = dispatch => ({
  fetchTopics: topics => dispatch(fetchTopics(topics)),
  addTopic: topic => dispatch(addTopic(topic))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);