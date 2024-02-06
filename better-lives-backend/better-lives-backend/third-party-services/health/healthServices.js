const axios = require("axios");
// const constants = require("./constants");

async function getHealthInfo() {
    try {

        const url = 'https://api.data.gov.in/resource/2f096820-1fa9-4a2c-95a2-f431a116978a?api-key=579b464db66ec23bdd000001eb637e9ec42846295b01bc4c801492b4&format=json&limit=1000'

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200)) {
            return resp.data
        }

        return {};
    }
    catch (err) {
        console.log("Error in health data info", err)
        return {}
    }
}

async function getHospitalInfo() {
    try {

        const url = 'https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?api-key=579b464db66ec23bdd000001eb637e9ec42846295b01bc4c801492b4&format=json&limit=40000'

        const resp = await axios.get(url, {}, {});

        if (resp && (resp.status === 200) && resp.data) {
            return resp.data.records
        }

        return [];
    }
    catch (err) {
        console.log("Error in hospital data info", err)
        return []
    }
}

module.exports = {
    getHealthInfo,
    getHospitalInfo
};
