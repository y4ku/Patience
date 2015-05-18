var React = require('react');
var Toggle = require('./ToggleTab');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var ScheduleToggle = React.createClass({
    render: function() {
        return (
        	<div className="schedule-toggle">
        		<Toggle text="Month" type="month" />
        		<Toggle text="Week" type="week" />
        		<Toggle text="Day" type="day" />
        	</div>
        );
    }
});

module.exports = ScheduleToggle;