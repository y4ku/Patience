var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var Home = React.createClass({
    render: function() {
        return (
            <div className="home">
                <h2>Home</h2>
            </div>
        );
    }
});

module.exports = Home;