var React = require('react');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Day = React.createClass({
	mixins: [BoababReactMixinBranch],
    render: function() {
        return (
        	<div className="day">
                Day Section
        	</div>
        );
    }
});

module.exports = Day;