var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var { Link } = Router;


var Login = React.createClass({
	mixins: [PureRenderMixin],
    render: function() {
        return (
            <div className="login">
                <h2>Login</h2>
            </div>
        );
    }
});

module.exports = Login;