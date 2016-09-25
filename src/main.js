//Entry point to the application

//simple routing
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Talks = require('./components/talks/talkAvailablePage');
//Add reference to your new Login component
var Header = require('./components/common/header'); // Uncomment to add header on the top and add  <Header /> to the return in the App above child
var Login = require('./components/login/login');

var App = React.createClass({
    render: function(){
        var Child;
        switch(this.props.route){
             case 'login': 
                Child = Login;// put the name of your Login component here to add it to the navigation
             break;
             case 'talks':
                Child = Talks;
                break;
             default: 
                Child = Home;
            break;
        }
        return (
            <div>
               <Header />
                <Child />
            </div>
        );
    }
});

function render(){
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();