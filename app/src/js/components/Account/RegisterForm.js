'use strict';

var React = require('react');
var AccountService = require('../../Services/AccountServices');

var RegisterForm = React.createClass({
    getInitialState: function() {
        return {
            registerName: "",
            registerPassword: "",
            registerEmail: ""
        };
    },
    getDefaultProps: function() {
        return {
            classes: ''
        };
    },
    _onChange: function(event) {
        this.setState({ [event.target.id]: event.target.value });
    },
    _onSubmit: function(event) {
        event.preventDefault();
    },
    render: function() {
        return (
            <div className="register-form" onChange={this._onChange} onSubmit={this._onSubmit}>
                <h1> Register </h1>
                <form>
                    <label htmlFor="registerName"> Name: </label>
                    <input name="registerName" type="text" id="registerName" value={this.state.name} />
                    <label htmlFor="registerEmail"> Email: </label>
                    <input name="registerEmail" type="text" id="registerEmail" value={this.state.name} />
                    <label htmlFor="registerPassword"> Password: </label>
                    <input name="registerPassword" type="password" id="registerPassword" value={this.state.password} />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        );
    }
});

module.exports = RegisterForm;