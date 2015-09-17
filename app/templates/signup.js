var React = require('react');

var Signup = React.createClass({
    render: function() {
        return (
            <div className="pure-g" id="full">
                <div className="pure-u-1-1">
                    <iframe id="iframe" src="http://mailman.yale.edu/mailman/listinfo/yaleoutdoors" />
                </div>
            </div>
        );
    }
});

module.exports = Signup;
