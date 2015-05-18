var React = require('react');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Month = React.createClass({
	mixins: [BoababReactMixinBranch],
    render: function() {
        return (
        	<div className="month">
                Month Section
        	</div>
        );
    }
});

module.exports = Month;