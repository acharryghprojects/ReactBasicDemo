"use strict";

var React = require('react');

var Home = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1 className="titleCentered">Welcome to QA Consulting</h1>
                <p className="titleCentered">Proud to announce Barcelona Symposium 2016 </p>

                <form className="form-signin" action="./landingPage.html">
                    <h3 className="form-signin-heading titleCentered">Please sign in</h3>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me</input>
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
});

module.exports = Home;