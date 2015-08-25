var React = require('react');

var MenuItem = React.createClass({
    render: function() {
        return (
            <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                    {this.props.name}
                </a>
            </li>
        )
    }
});

var Menu = React.createClass({
    render: function() {
        var itemNodes = this.props.items.map(function (item) {
            return <MenuItem name={item} />;
        });

        return (
            <div id="nav" class="pure-u">
                <a href="#" class="nav-menu-button">Menu</a>

                <div class="nav-inner">
                    <img src="img/yo-logo.jpg" width="200px" height="200px"/>
                    <div id="react"></div>

                    <div class="pure-menu">
                        <ul class="pure-menu-list">
                            {itemNodes}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Menu;
