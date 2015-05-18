var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Day = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
    render: function() {
        return (
        	<div className="day">
                Day Section
        	</div>
        );
    }
});

module.exports = Day;