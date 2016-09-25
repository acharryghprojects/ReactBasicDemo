"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron titleCentered">
            <div className="row">
                <h2>Thanks for taking part in our annual QA Consulting conference!</h2>
                <h4 className="title">Have a look at our list of conferences availble and get involved.</h4>
            </div>
            <div class="row">
                <img className="img-responsive img-thumbnail" src="images/mainImage.jpg" />
            </div>
            <br/>
            <br/>
            <div className="row">
                <p>Find out more about our services clicking on the following buttons:</p>
                <div className="col-md-3 col-md-offset-3">
                    <a className="btn btn-lg btn-primary btn-block " href="http://http://apprenticeships.qa.com/">
                  QA Apprenticeships</a>
                </div>
                <div className="col-md-3">
                    <a className="btn btn-lg btn-primary btn-block" href="https://www.qa.com/solutions">QA Learning</a>
                </div>
            </div>
        </div>
        );
    }
});

module.exports = Home;