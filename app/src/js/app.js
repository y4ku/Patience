var React = require('react');
var Router = require('react-router');
var { Route } = Router;
var { DefaultRoute } = Router;

var App = require('./Components/App');
var Home = require('./Components/Home');
var Login = require('./Components/Login');
var Schedule = require('./Components/Schedule');
var Day = require('./Components/Schedule/Day');
var Week = require('./Components/Schedule/Week');
var Month = require('./Components/Schedule/Month');


var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login} />
        <Route name="schedule" handler={Schedule} >
        	<Route name="month" handler={Month}/>
        	<Route name="day" handler={Day}/>
        </Route>
        <DefaultRoute name="home" handler={Home}/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});