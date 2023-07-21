const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=8c2f1cb4a5384293992134259232206&q=' + encodeURIComponent(lat) + ',' + encodeURIComponent(lon) + '&aqi=no'
    request({ url, json: true }, (error, {body}) => {
        // console.log(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, ' It is currently ' + body.current.temp_c+ ' degress out. It feels like ' + body.current.feelslike_c+ '.')
        }
    })
}

module.exports = forecast;