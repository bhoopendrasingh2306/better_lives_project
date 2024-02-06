const mongoose = require("mongoose")
const healthServiceExternal = require('../third-party-services/health/healthServices');
const scraper = require('./scraperService');
const { CoreRepo } = require("../helpers/mongo/coreRepository");
const { removeSpecialChars } = require("../helpers/utility");
const HOSPITAL_MODEL_NAME = 'hospital';
const HospitalModel = mongoose.model(HOSPITAL_MODEL_NAME)

const getHospitalsList = async (search,city) => {
    try {
        await scraper.scrapeDataIterable(HOSPITAL_MODEL_NAME, {}, {}, healthServiceExternal.getHospitalInfo);

        const hospitalRepo = new CoreRepo(HospitalModel, null);

        let query = {
            searchQuery: {},
            sort: { _id: 1 },
            limit: 50,
            offset: 0
        }

        if (search) {
            search = removeSpecialChars(search);
            query.searchQuery = {
                $or: [{ 'details.hospital_name': { $regex: search, $options: 'i' } },
                { 'details.district': { $regex: search, $options: 'i' } }]
            }
        }

        if (city) {
            search = removeSpecialChars(city);
            query.searchQuery['details.district'] = { $regex: city, $options: 'i' }
        }
        return hospitalRepo.list(query);
    }
    catch (err) {
        throw err
    }
}

module.exports = {
    getHospitalsList
}