const geoService = require('../third-party-services/geo/geo');
const scraper = require('../services/scraperService');
const CITIES_LIST_KEY = 'cities_list';

const listCities = async (search, country) => {
    try {

        let cities = await scraper.scrapeArray(CITIES_LIST_KEY, {}, {country: country}, geoService.getCityList);

        if (search) {
            cities = cities.filter((str) => str.toLowerCase().match(search.toLowerCase()));
        }

        cities = cities.slice(0, 30);

        return cities
    } catch (error) {
        throw error
    }
}

module.exports = {
    listCities
}