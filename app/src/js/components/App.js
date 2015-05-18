var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;
var Header = require('./Header');

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
            	<Header />
                <h1>Welcome To Patience</h1>
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;