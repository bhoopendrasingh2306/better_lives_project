const homeService = require('../../../../services/homeService')


const homeConfigController = async (req, res, next) => {
    try {
        res.data = await homeService.getHomeConfig();
        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    homeConfigController
}