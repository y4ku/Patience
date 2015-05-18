var StateTree = require('./../StateTrees/ScheduleStateTree');

var ScheduleActions = {
	changeScheduleView(view) {
		StateTree.select(['view']).set('current', view);
	}
}

module.exports = ScheduleActions;