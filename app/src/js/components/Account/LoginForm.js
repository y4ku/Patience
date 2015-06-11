'use strict';

var React = require('react');

var LoginForm = React.createClass({
  getInitialState: function() {
    return {
      loginName: "",
      loginPassword: ""
    };
  },
  getDefaultProps: function() {
    return {
      classes: ''
    };
  },
  _onChange: function(event) {
    this.setState({ [event.target.id]: event.target.value });
  },
  _onSubmit: function(event) {
    event.preventDefault();
  },
  render: function() {
    return (
      <div className="login-form" onChange={this._onChange} onSubmit={this._onSubmit}>
        <h1> Login </h1>
        <form>
          <label htmlFor="loginName"> Name: </label>
          <input name="loginName" type="text" id="loginName" value={this.state.name} />
          <label htmlFor="loginPassword"> Password: </label>
          <input name="loginPassword" type="password" id="loginPassword" value={this.state.password} />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;