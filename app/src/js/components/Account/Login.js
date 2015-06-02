'use strict';

var React = require('react');

var Login = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      password: ""
    };
  },
  getDefaultProps: function() {
    return {
      classes: ''
    };
  },
  render: function() {
    return (
      <div className="login-form">
        
      </div>
    );
  }
});

module.exports = Login;