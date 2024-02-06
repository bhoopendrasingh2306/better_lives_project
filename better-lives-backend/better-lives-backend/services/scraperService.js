const mongoose = require('mongoose')
const ScraperModel = mongoose.model("scrape");
const { CoreRepo } = require('../helpers/mongo/coreRepository');
const { isRefresh } = require('../helpers/utility');

async function get(query) {
    const scraperRepo = new CoreRepo(ScraperModel, null);
    return scraperRepo.details(query);
}

async function findOneAndUpdate(searchQuery, data, options) {
    const scraperRepo = new CoreRepo(ScraperModel, null);
    return scraperRepo.findOneAndUpdate(searchQuery, data, options);
}

async function getAggrigate(query) {
    const scraperRepo = new CoreRepo(ScraperModel, null);
    return scraperRepo.aggregate(query);
}

async function scrapeArray(key, data, externalQuery, externalAPI) {

    let res = []
    const query = {
        searchQuery: {
            key: key
        }
    }

    const dbData = await get(query);

    if (!dbData ||
        !dbData.dataArray ||
        isRefresh(dbData.lastUpdated)) {

        res = await externalAPI(externalQuery);

        if (res && res.length) {
            const scraperData = {
                key: key,
                dataArray: res,
                lastUpdated: new Date()
            }
            findOneAndUpdate(query.searchQuery, scraperData, { upsert: true });
        }

    } else {
        res = dbData.dataArray;
    }

    return res;
}

async function scrapeObject(key, data, externalQuery, externalAPI) {

    let res = []
    const query = {
        searchQuery: {
            key: key
        }
    }

    const dbData = await get(query);

    if (!dbData ||
        !dbData.dataObject ||
        isRefresh(dbData.lastUpdated)) {

        res = await externalAPI(externalQuery);

        if (res && (Object.keys(res).length > 0)) {
            const scraperData = {
                key: key,
                dataObject: res,
                lastUpdated: new Date()
            }
            findOneAndUpdate(query.searchQuery, scraperData, { upsert: true });
        }

    } else {
        res = dbData.dataObject;
    }

    return res;
}

async function scrapeDataIterable(model, data, externalQuery, externalAPI) {

    let GenericModel = null;
    try {
        GenericModel = mongoose.model(model);
    } catch (err) {
        console.log("generic model error");
        return null;
    }

    if (!GenericModel) return null;
    const genericRepo = new CoreRepo(GenericModel, null);

    const genericDataObject = await genericRepo.details({})

    if (!genericDataObject || isRefresh(genericDataObject.lastUpdated)) {

        const res = await externalAPI(externalQuery);

        await Promise.all(res.map(async (item) => {
            if (item._sr_no) {
                const searchQuery = {
                    key: item._sr_no,
                }
                const data = {
                    key: item._sr_no,
                    details: item,
                    lastUpdated: new Date()
                }
                return await genericRepo.findOneAndUpdate(searchQuery, data, { upsert: true });
            }
        }))

    }

    return null;
}

module.exports = {
    get,
    findOneAndUpdate,
    scrapeArray,
    scrapeObject,
    scrapeDataIterable
}