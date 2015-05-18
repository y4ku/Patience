var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var Toggle = require('./ToggleTab');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var ScheduleToggle = React.createClass({
	mixins: [BoababReactMixinBranch],
	cursors: {
		activeTab: ['view', 'current']
	},
    render: function() {
        return (
        	<div className="schedule-toggle">
                {this.state.activeTab}
        		<Toggle text="Month" type="month" />
        		<Toggle text="Week" type="week" />
        		<Toggle text="Day" type="day" />
        	</div>
        );
    }
});

module.exports = ScheduleToggle;