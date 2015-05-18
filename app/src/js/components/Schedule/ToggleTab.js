var React = require('react');
var Router = require('react-router');
var { Link } = Router;

var ScheduleContainer = React.createClass({
	getDefaultProps() {
		return {
			name: 'default tab',
			type: null
		};
	},
	_onClick(event) {
		if(!this.props.type)
			throw new Error('toggleType not defined for ' + this.props.text);
		console.log(this.props.type + ' toggle clicked');
	},
    render() {
        return (
			<div onClick={this._onClick} className="toggle-tab"> {this.props.text} </div>
        );
    }
});

module.exports = ScheduleContainer;