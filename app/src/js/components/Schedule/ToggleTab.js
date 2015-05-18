var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
ScheduleActions = require('./../../Actions/Schedule');

var ToggleTab = React.createClass({
	mixins: [PureRenderMixin],
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