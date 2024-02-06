const axios = require("axios");
// const constants = require("./constants");

async function getTourismInfo() {
    try {
        const url = 'https://api.data.gov.in/resource/6e88bbd6-7558-4f0f-b475-c7270e712850?api-key=579b464db66ec23bdd000001eb637e9ec42846295b01bc4c801492b4&format=json&limit=1000'

        const resp = await axios.get(url, {}, {});

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
    getTourismInfo
};