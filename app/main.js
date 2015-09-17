var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var Menu = require('./components/menu.js');
var List = require('./components/list.js');
var Content = require('./components/content.js');

var Home = require('./templates/home.js');
var Trips = require('./templates/trips.js');
var About = require('./templates/about.js');
var Resources = require('./templates/resources.js');
var Blog = require('./templates/blog.js');
var Leaders = require('./templates/leaders.js');
var Projects = require('./templates/projects.js');
var Signup = require('./templates/signup.js');

var Fixtures = require('./fixtures.js');
var Helpers = require('./helpers.js');

var App = React.createClass({
    render: function () {
        return (
            <div id="layout" className="content pure-g">
                <Menu/>
                {this.props.children}
            </div>
        );
    }
});

React.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="trips" component={Trips} />
            <Route path="about" component={About} />
            <Route path="resources" component={Resources} />
            <Route path="blog" component={Blog} />
            <Route path="leaders" component={Leaders} />
            <Route path="projects" component={Projects} />
            <Route path="signup" component={Signup} />
        </Route>
    </Router>
), document.body);


// trips: Fixtures.trips.map(Helpers.tripListFormatter)
