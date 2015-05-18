var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var { Link } = Router;

var Home = React.createClass({
	mixins: [PureRenderMixin],
    render: function() {
        return (
            <div className="home">
                <h2>Home</h2>
            </div>
        );
    }
});

module.exports = Home;