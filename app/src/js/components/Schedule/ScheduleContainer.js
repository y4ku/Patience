var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var ScheduleToggle = require('./ScheduleToggle');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Day = require('./Day');
var Week = require('./Week');
var Month = require('./Month');

var ScheduleContainer = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
		currentView: ['view', 'current']
	},
    render: function() {
        return (
        	<div className="schedule-container cf">
        		<ScheduleToggle />
        		<div className={this.state.currentView+'-view schedule-view'}>
        			<Day ref="day"/>
        			<Week ref="week"/>
        			<Month ref="month"/>
        		</div>
        	</div>
        );
    }
});

module.exports = ScheduleContainer;