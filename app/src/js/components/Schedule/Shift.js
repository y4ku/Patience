var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Shift = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
        date: ['view', 'date'],
        shifts: ['model', 'shifts']

    },
    render: function() {
        return (
        	<div className="shift">
                {this.props.shift}
        	</div>
        );
    }
});

module.exports = Shift;