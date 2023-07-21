const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=8c2f1cb4a5384293992134259232206&q=' + encodeURIComponent(address) + '&aqi=no';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location. Try another search!', undefined)
        }
        else {
            callback(undefined, {
                lattitude: body.location.lat,
                longitutde: body.location.lon,
                location: body.location.name
                
            })
        }
    })
}

module.exports = geocode