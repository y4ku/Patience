var Baobab = require('baobab');
var moment = require('moment');

ScheduleStateTree = new Baobab(
{
	model: {
		date: moment(),
		shifts: null,
		shiftId: null
	},
	view: {
		current: 'day',
		date: moment()
	}
},
{
	facets: {
		hoursByShift: {
			cursors: {
				id: ['model', 'shiftId'],
				shifts: ['model', 'shifts']
			},
			get: function(data) {
				return data.shifts;
			}
		}
	}
});

module.exports = ScheduleStateTree;