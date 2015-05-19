var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Toggle = require('./ToggleTab');
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var ScheduleToggle = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return (
        	<div className="schedule-toggle cf">
        		<Toggle text="Month" type="month" />
        		<Toggle text="Day" type="day" />
        	</div>
        );
    }
});

module.exports = ScheduleToggle;