var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Menu = require('./templates/menu.js');
var List = require('./templates/list.js');
var Content = require('./templates/content.js');

var Main = React.createClass({
    render: function () {
        return (
            <div id="layout" class="content pure-g">
                <Menu/>
                <List/>
                <Content/>
            </div>
        );
    }
})

React.render(
  <Main/>,
  document.getElementById('app')
);
