const config = require("../../core-services/config/config")
const key = config.creds.weather.apiKey;
const version = config.creds.weather.version;
const baseUrl = config.creds.weather.url;

const urls = {
    getWeatherInfo({lat, long}){
        return `${baseUrl}/data/${version}/weather?lat=${lat}&lon=${long}&appid=${key}`
    },
    getCityInfo({city, countryCode}){
        return `${baseUrl}/geo/1.0/direct?q=${city}, ,${countryCode}&appid=${key}`
    },
    getAQIList:  'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001eb637e9ec42846295b01bc4c801492b4&format=json&limit=4000'

}

module.exports = {
    urls
}