const tourismServices = require('../../../../third-party-services/tourism/tourismService')


const getTourismInfo = async (req, res, next) => {
    try {
        const sites = await tourismServices.getTourismInfo();
        console.log("here2")
        res.data = sites ? sites.records : [];
        next();

    } catch (error) {
        throw error
    }
}

module.exports = {
    getTourismInfo
}