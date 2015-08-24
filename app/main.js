var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var Menu = require('./menu.js');
var List = require('./list.js');
var Content = require('./content.js');

// declare our routes and their hierarchy
// var routes = (
//   <Route handler={App}>
//     <Route path="about" handler={About}/>
//     <Route path="inbox" handler={Inbox}/>
//   </Route>
// );

// var App = React.createClass({
//   render () {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//       </div>
//     )
//   }
// });

// React.render(<App/>, document.body);
console.log('lol');
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
//hmm
