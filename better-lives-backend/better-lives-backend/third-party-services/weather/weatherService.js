const axios = require('axios');
const constants = require('./constants');

async function getCityInfo({ city, countryCode }) {
    try {

        const url = constants.urls.getCityInfo({ city, countryCode });

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return [];
    } catch (err) {
        console.log("Error in weather service country info", err)
        return []
    }
}

const getWeatherInfo = async (data) => {
    try {

        let { lat, long } = data;

        const url = constants.urls.getWeatherInfo({ lat, long });

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return {};
    } catch (err) {
        console.log("Error in weather service", err)
        return {}
    }
}

const getAQIList = async () => {
    try {

        const url = constants.urls.getAQIList;

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return {};
    } catch (err) {
        console.log("Error in weather service", err)
        return {}
    }
}

module.exports = {
    getWeatherInfo,
    getCityInfo,
    getAQIList
}