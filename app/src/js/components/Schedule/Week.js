var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Week = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
        date: ['view', 'date']
    },
    render: function() {
        return (
        	<div className="week">
                <h1>Week of: {this.state.date.startOf('week').format()} </h1>
        	</div>
        );
    }
});

module.exports = Week;