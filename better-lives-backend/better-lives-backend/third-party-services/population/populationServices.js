const axios = require("axios");
// const constants = require("./constants");

async function getPopulationInfo(city = 'Agra') {
    try {

        const url = `https://countriesnow.space/api/v0.1/countries/population/cities`

        const resp = await axios.post(url, { city: city }, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return {};
    }
    catch (err) {
        console.log("Error in tourism data info", err)
        return {}
    }
}

module.exports = {
    getPopulationInfo
};