var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Shift = require('./Shift');

var Shifts = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
	cursors: {
        date: ['view', 'date'],
        shifts: ['model', 'shifts']
    },
    render: function() {
        return (
        	<div className="shifts">
                {this.state.shifts.map(
                   (shift) => <Shift shift={shift}/>
                )}
        	</div>
        );
    }
});

module.exports = Shifts;