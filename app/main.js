var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Menu = require('./templates/menu.js');
var List = require('./templates/list.js');
var Content = require('./templates/content.js');

var Fixtures = require('./fixtures.js');

var App = React.createClass({
    render: function () {
        return (
            <div id="layout" class="content pure-g">
                <Menu items={Fixtures.menuItems} />
                <List items={Fixtures.listItems} />
                <Content/>
            </div>
        );
    }
})

React.render(
  <App/>,
  document.body
);
