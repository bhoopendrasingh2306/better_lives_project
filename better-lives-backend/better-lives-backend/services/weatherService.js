
const weatherApi = require('../third-party-services/weather/weatherService');
const scraper = require("./scraperService");
const AQI_LIST_KEY = 'aqi_list';

const getCityInfoKey = (city) => {
    return `city_info_${city}`
} 


const getWeatherInfo = async (data) => {
    try {

        let { lat, long, city } = data;

        if (city) {
            const cityInfo = await scraper.scrapeArray(getCityInfoKey(city), {}, { city, countryCode: 'IN' }, weatherApi.getCityInfo);
            if (cityInfo && cityInfo.length) {
                lat = cityInfo[0].lat
                long = cityInfo[0].lon
            }
        }

        const [weather, { records }] = await Promise.all([
            weatherApi.getWeatherInfo({ lat, long }),
            scraper.scrapeObject(AQI_LIST_KEY, {}, {}, weatherApi.getAQIList),
        ]);

        const AQI = (records && records.length) ? records.filter(i => i.city.toLowerCase() === weather.name.toLowerCase()) : []

        weather.aqi = (AQI && AQI.length) ? AQI[0].pollutant_avg : "Not Available";
        return weather;

    } catch (err) {
        console.log("Error in weather service", err)
        return {}
    }
}

module.exports = {
    getWeatherInfo
}