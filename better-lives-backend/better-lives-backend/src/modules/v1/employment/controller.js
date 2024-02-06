const employmentServices = require('../../../../third-party-services/employment/employmentService')


const getEmploymentInfo = async (req, res, next) => {
    try {

        const sites = await employmentServices.getEmploymentInfo();
        res.data = sites ? sites.records : [];
        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    getEmploymentInfo
}