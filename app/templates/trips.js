var React = require('react');

var List = require('../components/list.js');
var Content = require('../components/content.js');

var tripList = require('../fixtures.js').trips;
var tripListFormatter = require('../helpers.js').tripListFormatter;

var Trips = React.createClass({
    getInitialState: function() {
        return {trips: tripList};
    },

    render: function () {
        return (
            <div>
                <List items={this.state.trips.map(tripListFormatter)} />
                <Content text={'hi!'}/>
            </div>
        );
    }
});

module.exports = Trips;
