"use strict";

//This file is mocking a web API by hitting hard coded data.
var talks = require('./talkData').talks;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(talk) {
	return talk.subject.toLowerCase() + '-' + talk.description.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var TalkApi = {
	getAllTalks: function() {
		return _clone(talks); 
	},

	getTalkById: function(id) {
		var talk = _.find(talks, {id: id});
		return _clone(talk);
	},
	
	saveTalk: function(talk) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the talk to the DB via AJAX call...');
		
		if (talk.id) {
			var existingTalkIndex = _.indexOf(talks, _.find(talks, {id: talk.id})); 
			talks.splice(existingTalkIndex, 1, talk);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new authors in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			talk.id = _generateId(talk);
			talks.push(talk);
		}

		return _clone(talk);
	},

	deleteAuthor: function(id) {
		console.log('Pretend this just deleted the talk from the DB via an AJAX call... id ' + id);
		_.remove(talks, { id: id});
	}
};

module.exports = TalkApi;