const weatherService = require('../../../../services/weatherService')


const getWeatherInfo = async (req, res, next) => {
    try {

        res.data = await weatherService.getWeatherInfo(req.query);
        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    getWeatherInfo
}