const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=eb32c4869dad0c334d203892fbff1dde&query=37.8267,-122.4233&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=eb32c4869dad0c334d203892fbff1dde&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true}, (error, {body}) => {

        if (error) { //low level errors
            callback('Unable to connect to weather service!', undefined)

        } else if (body.error) {
            callback('Unable to find location!', undefined)

        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees. It feels like ' + 
            body.current.feelslike + ' degrees. The humidity is currently ' + body.current.humidity + '%.')

        }

    }) 
}

module.exports = forecast