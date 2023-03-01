const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d9bd6769ab573e1e7d42bb69306dc481&query=${latitude},${longitude}&units=f`;

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const weatherDesc = body.current.weather_descriptions[0];
            const temp = body.current.temperature;
            const feelslike = body.current.feelslike;
            callback(undefined, `${weatherDesc}. It is currently ${temp}, but it feels like ${feelslike}`);
        }
    });
};

module.exports = forecast;