import React from 'react';
import ReactMixin from 'react-mixin';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    };
  }

  render() {
      username = this.data.currentUser ? this.data.currentUser.username : "No Name"
    return (
      <div>
        Hello {username}
      </div>
    )
  }
}
ReactMixin(Main.prototype, ReactMeteorData);
