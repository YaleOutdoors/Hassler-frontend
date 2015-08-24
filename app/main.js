var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

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


React.render(
  React.createElement('h1', null, 'Hello, world!'),
  document.getElementById('react')
);
