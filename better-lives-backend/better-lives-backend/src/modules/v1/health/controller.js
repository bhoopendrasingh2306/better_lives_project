const healthServices = require('../../../../services/healthService')


const getHealthInfo = async (req, res, next) => {
    try {

        const chcs = await healthServices.getHealthInfo();
        res.data = chcs ? chcs.records : [];
        next();

    } catch (error) {
        throw error
    }
}

const getHospitalInfo = async (req, res, next) => {
    try {

        const { search, city } = req.query;
        const hospitals = await healthServices.getHospitalsList(search, city);
        res.data = hospitals.map(hospital => hospital.details);
        next();

    } catch (error) {
        throw error
    }
}


module.exports = {
    getHealthInfo,
    getHospitalInfo
}