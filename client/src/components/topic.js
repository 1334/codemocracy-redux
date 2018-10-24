import React from 'react';

export default class Topic extends React.Component {
  render () {
    return (
      <div className="topic">
        <div><button>+</button>{this.props.topic.score}<button>-</button></div>
        <div>
          <p>{this.props.topic.title}</p>
          <p>{this.props.topic.published_at}</p>
        </div>
        <div><button>Delete</button></div>
      </div>
    );
  }
}