var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Hours = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
        date: ['view', 'date']
    },
    render: function() {
        return (
        	<div className="hours">
                
        	</div>
        );
    }
});

module.exports = Hours;