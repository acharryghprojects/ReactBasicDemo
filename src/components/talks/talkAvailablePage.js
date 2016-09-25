"use strict";

var React = require('react');
var TalkApi = require('../../api/talkApi');

var Talks = React.createClass({
getInitialState: function () {
    return {
        talks: []
    };
},  //Add functions to initialize and get data from API

componentWillMount: function () {
    this.setState({ talks : TalkApi.getAllTalks()} );
},
    render: function () {
        var createTalkRow = function (talk) {
            return (
                <tr key={talk.id}>
                    <td><a href={"/#talks" + talk.id}>{talk.id}</a></td>
                    <td>{talk.subject} </td>
                    <td>{talk.description}</td>
                </tr>
            );
        };
        return (
            <div>
                <h1 className="titleCentered">Talks available</h1>
                <div className="containerTable">
                    <table id="contact" className="table">
                        <thead className="thead-default">
                            <tr>
                                <th>ID</th>
                                <th>Subject</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.talks.map(createTalkRow, this) }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = Talks;