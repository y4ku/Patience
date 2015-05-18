var React = require('react');
var Router = require('react-router');
var { Route } = Router;

var App = require('./components/App');
var Home = require('./components/Home');
var Login = require('./components/Login');
var Schedule = require('./components/Schedule');

var routes = (
    <Route handler={App}>
        <Route name="home" path="/" handler={Home} />
        <Route name="login" path="/login" handler={Login} />
        <Route name="schedule" path="/schedule" handler={Schedule} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
});