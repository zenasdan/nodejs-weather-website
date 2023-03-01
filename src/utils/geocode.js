const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${encodeURIComponent(address)}&limit=1&output=json`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to geocoding service!', undefined);
        } else if (body.error) {
            callback('Unable to find coordinates. Try another search.', undefined);
        } else if (body.data.length === 0) {
            callback("Unable to find location.", undefined);
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            });
        }
    });
};

module.exports = geocode;