var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var TimeSlot = React.createClass({
	mixins: [PureRenderMixin],
    render: function() {
        return (
            <div className="time-slot">
            	{this.props.time.format('LT')}
            </div>
        );
    }
});

module.exports = TimeSlot;