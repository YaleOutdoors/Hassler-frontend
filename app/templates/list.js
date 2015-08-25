var React = require('react');

var ListItem = React.createClass({
    render: function() {
        console.log(this.props);
        return (
            <div className="email-item email-item-unread pure-g">
                <div className="pure-u">
                    <img className="email-avatar" height="64" width="64" src={this.props.img}></img>
                </div>

                <div className="pure-u-3-4">
                    <h5 className="email-name">{this.props.subhead}</h5>
                    <h4 className="email-subject">{this.props.head}</h4>
                    <p className="email-desc">
                        {this.props.children}
                    </p>
                </div>
            </div>
        );
    }
})

var List = React.createClass({
    render: function () {
        var listNodes = this.props.items.map(function(item) {
            return (
                <ListItem head={item.head} subhead={item.subhead} img={item.img}>
                    {item.text}
                </ListItem>
            );
        });

        return (
            <div id="list" className="pure-u-1">
                {listNodes}
            </div>
        );
    }
});

module.exports = List;
