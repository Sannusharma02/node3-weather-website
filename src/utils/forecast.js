const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=8c2f1cb4a5384293992134259232206&q=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '&aqi=no'
    request({ url, json: true }, (error, { body }) => {
        // console.log(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, 'The current temperature is ' + body.current.temp_c + ' degrees Celsius. However, due to the combination of temperature and humidity, it feels like ' + body.current.feelslike_c + ' degrees Celsius. Additionally, its ' + body.current.condition.text + ' at the moment.')
        }
    })
}

module.exports = forecast;