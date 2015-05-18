var Baobab = require('baobab');
var moment = require('moment');

ScheduleStateTree = new Baobab({
	model: {

	},
	view: {
		current: 'day',
		date: moment()
	}
});

module.exports = ScheduleStateTree;