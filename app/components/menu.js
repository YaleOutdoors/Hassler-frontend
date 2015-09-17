var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var menuItems = [
    ['/about', "About"],
    ['/blog', "Blog"],
    ['/trips', "Trips"],
    ['/leaders', "Leaders"],
    ['/projects', "Projects"],
    ['/resources', "Resources"],
    ['/signup', "Email List Signup"]
];

var MenuItem = React.createClass({
    render: function() {
        return (
            <li className="pure-menu-item">
                <Link to={this.props.path} className="pure-menu-link">
                    {this.props.name}
                </Link>
            </li>
        )
    }
});

var Menu = React.createClass({
    render: function() {
        var itemNodes = menuItems.map(function (item) {
            return <MenuItem path={item[0]} name={item[1]} />;
        });

        return (
            <div id="nav" className="pure-u">
                <a href="#" className="nav-menu-button">Menu</a>

                <div className="nav-inner">
                    <img src="img/yo-logo.jpg" width="200px" height="200px"/>
                    <div id="react"></div>

                    <div className="pure-menu">
                        <ul className="pure-menu-list">
                            {itemNodes}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Menu;
