var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var moment = require('moment');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;
var Calendar = require('./../Calendar/Calendar');
var ScheduleActions = require('./../../Actions/Schedule');

var Month = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	_onDatePicked(date) {
		ScheduleActions.setDate(date);
		ScheduleActions.changeScheduleView('day');
	},
    render: function() {
        return (
        	<div className="month">
                 <Calendar showDaysOfWeek={true}
            		forceSixRows={false}
            		onPickDate={this._onDatePicked} />
        	</div>
        );
    }
});

module.exports = Month;