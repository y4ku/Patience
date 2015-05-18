var React = require('react');
var ScheduleToggle = require('./ScheduleToggle');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Day = require('./Day');
var Week = require('./Week');
var Month = require('./Month');

var ScheduleContainer = React.createClass({
	mixins: [BoababReactMixinBranch],
	cursors: {
		currentView: ['view', 'current']
	},
    render: function() {
        return (
        	<div className="schedule-container">
        		<ScheduleToggle />
        		<div className={this.state.currentView+'-view'}>
        			<Day />
        			<Week />
        			<Month />
        		</div>
        	</div>
        );
    }
});

module.exports = ScheduleContainer;