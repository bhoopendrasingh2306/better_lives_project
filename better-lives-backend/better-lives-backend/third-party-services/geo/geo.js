const axios = require('axios');
const constants = require('./constants');

async function getCityList({country}) {
    try {

        const url = constants.urls.getCityList;

        const resp = await axios.post(url, { country: country }, {});

        if (resp && (resp.status === 200)) {
            return resp.data.data
        }
        return [];
    } catch (err) {
        console.log("Error in geo service country list", err)
        return []
    }
}

module.exports = {
    getCityList
}