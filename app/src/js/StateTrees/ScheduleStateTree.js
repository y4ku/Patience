var Baobab = require('baobab');
var moment = require('moment');
var _ = require('lodash');

var hoursArray = (() => {
	var hoursArray = [],
		begin = moment().clone().startOf('day'),
		end = moment().clone().endOf('day').subtract(30, 'm');

	hoursArray.push(begin.clone());
	while(begin.isBefore(end)) {
		hoursArray.push(begin.add(30, 'm').clone());
	}
	return hoursArray;
})();

ScheduleStateTree = new Baobab(
{
	model: {
		date: moment(),
		shifts: ['Konrad', 'Maddy', 'Kuba'],
		appointments: null,
		user: {},
		hours: hoursArray
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
				appointments: ['model', 'appointments'],
				shifts: ['model', 'shifts'],
				hours: ['model', 'hours']
			},
			get: function(data) {
				return data.hours;
			}
		}
	}
});

module.exports = ScheduleStateTree;