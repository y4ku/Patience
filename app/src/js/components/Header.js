var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var { Link } = Router;

var Header = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return (
            <header className="header">
                <nav>
					<Link to="app"> Home </Link>
					<Link to="schedule"> Schedule </Link>
					<Link to="login"> Login </Link>
                </nav>
            </header>
        );
    }
});

module.exports = Header;