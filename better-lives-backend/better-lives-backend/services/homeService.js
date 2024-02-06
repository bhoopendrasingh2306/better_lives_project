const mongoose = require('mongoose')
const HomeModel = mongoose.model("home");
const { CoreRepo } = require('../helpers/mongo/coreRepository');

const getHomeConfig = async () => {
    try {
        const homeRepo = new CoreRepo(HomeModel, {search: true, explore: true, compare: true});

        // homeRepo.save()
        return homeRepo.details({});
    } catch (err) {
        throw err;
    }

}

module.exports = {
    getHomeConfig

}