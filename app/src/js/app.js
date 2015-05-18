var React = require('react');
var Router = require('react-router');
var { Route } = Router;
var { DefaultRoute } = Router;

var App = require('./components/App');
var Home = require('./components/Home');
var Login = require('./components/Login');
var Schedule = require('./components/Schedule');
var Day = require('./components/Schedule/Day');
var Week = require('./components/Schedule/Week');
var Month = require('./components/Schedule/Month');


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login} />
        <Route name="schedule" handler={Schedule} >
        	<Route name="month" handler={Month}/>
        	<Route name="week" handler={Week}/>
        	<Route name="day" handler={Day}/>
        </Route>
        <DefaultRoute name="home" handler={Home}/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});