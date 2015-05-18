var StateTree = require('./../StateTrees/ScheduleStateTree');

var ScheduleActions = {
	changeScheduleView(view) {
		StateTree.select(['view']).set('current', view);
	},
	setDate(date) {
		StateTree.select(['view']).set('date', date);
	}
}

module.exports = ScheduleActions;