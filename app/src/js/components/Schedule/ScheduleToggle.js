var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var Toggle = require('./ToggleTab');

var ScheduleToggle = React.createClass({
    render: function() {
        return (
        	<div className="schedule-toggle">
        		<Toggle text="Month" type="monthView" />
        		<Toggle text="Week" type="weekView" />
        		<Toggle text="Day" type="dayView" />
        	</div>
        );
    }
});

module.exports = ScheduleToggle;