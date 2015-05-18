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
            </div>
        );
    }
});

module.exports = Schedule;