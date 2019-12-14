const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const requestedLocation = process.argv[2]

if(!requestedLocation) {
    console.log('Please provide a location')
} else {
    geocode(requestedLocation, (error, { longitude, latitude, location }) => {
        if(error) {
           return console.log(error) // function execution ceases after logging to console. 
        }
    
        forecast(longitude, latitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}




// const url = 'https://api.darksky.net/forecast/257646fd3e0487456a14328da57dab97/37.8267,-122.4233?units=si&lang=ko'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnVyYWl6dSIsImEiOiJjangyOTlnZ3gwaTRvNGJseXlxMzc3bDQ2In0.YeoG_sHv6emtn6TWJ_YngA&limit=1'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('unable to connect')
//     } else if(response.body.error) {
//         console.log('unable to find location')
//     } else {
//         let weather = response.body.currently
//         console.log(`${response.body.daily.data[0].summary} It is currently ${weather.temperature} degrees out. There is a ${weather.precipProbability}% chance of rain.`)
//     }
    
// })





// request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error) {
//         console.log('unable to connect to geocoding')
//     } else if(response.body.features.length === 0) {
//         console.log('unable to find location in geocoding')
//     } else {
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
  
// })