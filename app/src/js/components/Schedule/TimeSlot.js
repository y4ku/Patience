var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

var TimeSlot = React.createClass({
	mixins: [PureRenderMixin],
    render: function() {
        return (
            <div className="time-slot">
                <h2>TimeSlot</h2>
            </div>
        );
    }
});

module.exports = TimeSlot;