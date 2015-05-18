var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <nav>
					<Link to="home"> Home </Link>
					<Link to="schedule"> Schedule </Link>
					<Link to="login"> Login </Link>
                </nav>
            </header>
        );
    }
});

module.exports = Header;