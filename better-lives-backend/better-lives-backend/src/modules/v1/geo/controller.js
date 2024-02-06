const geoService = require('../../../../services/geoService')


const listCities = async (req, res, next) => {
    try {

        const { search, country } = req.query;
        res.data = await geoService.listCities(search, 'India');
        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    listCities
}