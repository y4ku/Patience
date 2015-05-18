var React = require('react');
var Router = require('react-router');
var { Link } = Router;
var ScheduleToggle = require('./ScheduleToggle');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var ScheduleContainer = React.createClass({
	mixins: [BoababReactMixinBranch],
	cursors: {
		currentView: ['view', 'current']
	},
    render: function() {
        return (
        	<div className="schedule-container">
        		<ScheduleToggle />
        		<div className={this.props.currentView+'-view'}>
        			<div className="month"> 
        			
        			</div>
        			<div className="week"> 

        			</div>
        			<div className="day"> 

        			</div>
        		</div>
        	</div>
        );
    }
});

module.exports = ScheduleContainer;