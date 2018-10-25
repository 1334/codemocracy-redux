import React from 'react';
import { connect } from 'react-redux';

import TopicsList from './topicsList'
import { refreshTopics } from '../redux/actions';

class Dashboard extends React.Component {

  state = {
    titleText: ''
  };

  componentDidMount () {
    fetch('http://localhost:4000/topics')
      .then(res => res.json())
      .then(topics => this.props.refreshTopics(topics));
  }

  addTopic () {
    fetch('http://localhost:4000/topics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ title: this.state.titleText })
    }).then(res => res.json())
      .then(topics => this.props.refreshTopics(topics));
    this.setState({ titleText: '' });
  }

  render () {
    return (
      <div>
        <h1>Codemocracy's Dashboard</h1>
        <input type="text" name="title-text"
          placeholder="add topic"
          value={this.state.titleText}
          onChange={e => this.setState({ titleText: e.target.value })} />
        <button for="title-text" type="submit" onClick={() => this.addTopic()}>Add topic</button>
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
  refreshTopics: topics => dispatch(refreshTopics(topics))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);