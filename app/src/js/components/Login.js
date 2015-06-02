var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var LoginForm = require('./Account/LoginForm');
var RegisterForm = require('./Account/RegisterForm');
var { Link } = Router;


var Login = React.createClass({
	mixins: [PureRenderMixin],
    render: function() {
        return (
            <div className="login">
                <LoginForm />
                <RegisterForm />
            </div>
        );
    }
});

module.exports = Login;