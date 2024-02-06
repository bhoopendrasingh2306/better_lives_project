const axios = require("axios");
// const constants = require("./constants");

async function getEmploymentInfo() {
    try {

        const url = 'https://api.data.gov.in/resource/a295a9b3-d425-4122-a8aa-67ecaf07649d?api-key=579b464db66ec23bdd000001eb637e9ec42846295b01bc4c801492b4&format=json&limit=1000'

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return {};
    }
    catch (err) {
        console.log("Error in employment data info", err)
        return {}
    }
}

module.exports = {
    getEmploymentInfo
};

