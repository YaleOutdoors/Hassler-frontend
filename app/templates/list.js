var React = require('react');

var ListItem = React.createClass({
    render: function() {
        return (
            <div class="email-item email-item-unread pure-g">
                <div class="pure-u">
                    <img class="email-avatar" alt="Eric Ferraiuolo&#x27;s avatar" height="64" width="64" src="img/common/ericf-avatar.png"></img>
                </div>

                <div class="pure-u-3-4">
                    <h5 class="email-name">{this.props.subhead}</h5>
                    <h4 class="email-subject">{this.props.head}</h4>
                    <p class="email-desc">
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
                <ListItem head={item.head} subhead={item.subhead}>
                    {item.text}
                </ListItem>
            );
        });

        return (
            <div id="list" class="pure-u-1">
                {listNodes}
            </div>
        );
    }
});

module.exports = List;
