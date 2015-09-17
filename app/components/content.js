var React = require('react');

var Content = React.createClass({
    render: function () {
        return (
            <div id="main" className="pure-u-1">
                <div className="email-content">
                    <div className="email-content-header pure-g">
                        <div className="pure-u-1-2">
                            <h1 className="email-content-title">Hello from Toronto</h1>
                            <p className="email-content-subtitle">
                                From <a>Tilo Mitra</a> at <span>3:56pm, April 3, 2012</span>
                            </p>
                        </div>

                        <div className="email-content-controls pure-u-1-2">
                            <button className="secondary-button pure-button">Reply</button>
                            <button className="secondary-button pure-button">Forward</button>
                            <button className="secondary-button pure-button">Move to</button>
                        </div>
                    </div>

                    <div className="email-content-body">
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Content;
