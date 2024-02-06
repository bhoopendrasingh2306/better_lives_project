const populationServices = require('../../../../third-party-services/population/populationServices')


const getPopulationInfo = async (req, res, next) => {
    try {

        const { city } = req.query;
        const data =  await populationServices.getPopulationInfo(city);

        res.data = data && data.data;

        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    getPopulationInfo
}