var React = require('react');
var Router = require('react-router');
var { Link } = Router;
ScheduleActions = require('./../../Actions/Schedule');

var ToggleTab = React.createClass({
	getDefaultProps() {
		return {
			name: 'default tab',
			type: null
		};
	},
	_onClick(event) {
		if(!this.props.type)
			throw new Error('toggleType not defined for ' + this.props.text);
		ScheduleActions.changeScheduleView(this.props.type);
	},
    render() {
        return (
			<div onClick={this._onClick} className="toggle-tab"> {this.props.text} </div>
        );
    }
});

module.exports = ToggleTab;