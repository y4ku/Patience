var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var ScheduleToggle = require('./ScheduleToggle');

var ScheduleContainer = React.createClass({
    render: function() {
        return (
        	<div className="schedule-container">
        		<ScheduleToggle />
        	</div>
        );
    }
});

module.exports = ScheduleContainer;