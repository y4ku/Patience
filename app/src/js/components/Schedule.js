var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var { Link } = Router;
var ScheduleContainer = require('./Schedule/ScheduleContainer');
var ScheduleStateTree = require('./../StateTrees/ScheduleStateTree');
var PropTypes = require('baobab-react/prop-types');


var Schedule = React.createClass({
    mixins: [PureRenderMixin],
    childContextTypes: {
         tree: PropTypes.baobab
    },
    getChildContext() {
        return {
            tree: ScheduleStateTree //reference to your baobab
        };
    },
    render: function() {
        return (
            <div className="schedule">
                <h2>Schedule</h2>
                <ScheduleContainer />
                <div>
                    <pre>
                    ScheduleView
                    	Month  
                    		Calendar
                    			Year
                    			Previous Month --- Next Month
                    			CalendarDays
                    				CalendarDay 
                    				((Maybe some visual represntation of schedule events))
                    				Click on Day go to day view
                    	Week
                    		Previous Week --- Next Week
                    		Weekdays
                    			WeekDay
                    			((Maybe some visual represntation of schedule events))
                    				Click on Day go to day view
                    	Day
                    		Remove slot ---  Add Slot
                    		Hours
                    			TimeSlots
                    </pre>
                </div>
            </div>
        );
    }
});

module.exports = Schedule;