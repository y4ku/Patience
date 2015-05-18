var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var BoababReactMixinBranch = require('baobab-react/mixins').branch;

var Hours = require('./Hours');

var Day = React.createClass({
	mixins: [BoababReactMixinBranch, PureRenderMixin],
    cursors: {
        date: ['view', 'date'],
        hours: ['model', 'hours']
    },
    facets: {
        hours: 'hoursByShift'
    },
    render: function() {
        return (
        	<div className="day">
        	   <h1>{this.state.date.format()}</h1>
               <Hours />
            </div>
        );
    }
});

module.exports = Day;