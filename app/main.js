var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Menu = require('./templates/menu.js');
var List = require('./templates/list.js');
var Content = require('./templates/content.js');

var Fixtures = require('./fixtures.js');
var Helpers = require('./helpers.js');

var App = React.createClass({
    render: function () {

        var trips = Fixtures.trips.map(Helpers.tripListFormatter);

        return (
            <div id="layout" class="content pure-g">
                <Menu items={Fixtures.menuItems} />
                <List items={trips} />
                <Content/>
            </div>
        );
    }
})

React.render(
  <App/>,
  document.body
);
