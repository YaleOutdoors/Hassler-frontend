var tripListFormatter = function(trip) {
    var props = {
        subhead: trip.type,
        head: trip.name,
        text: trip.shortText,
    };

    if (trip.pics) {
        props.img = 'img/trip_pics/' + trip.pics[0];
    }

    return props;
};

module.exports = {
    tripListFormatter: tripListFormatter
};
