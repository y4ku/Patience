var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;
var TimeSlot = require('./TimeSlot');

var Hours = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
        date: ['view', 'date']
    },
    render: function() {
        return (
        	<div className="hours">
                {this.props.hours.map((hour) => 
                    <TimeSlot key={hour.format('LT')} time={hour} />
                )}            
        	</div>
        );
    }
});

module.exports = Hours;