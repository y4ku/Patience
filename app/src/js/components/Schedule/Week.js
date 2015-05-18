var React = require('react');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Week = React.createClass({
	mixins: [BoababReactMixinBranch],
    render: function() {
        return (
        	<div className="week">
                Week Section
        	</div>
        );
    }
});

module.exports = Week;