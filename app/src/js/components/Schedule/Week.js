var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Week = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
    render: function() {
        return (
        	<div className="week">
                Week Section
        	</div>
        );
    }
});

module.exports = Week;