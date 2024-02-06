const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scrapedDataSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    dataObject: {
        type: Object,
        required: false
    },
    dataArray: {
        type: Array,
        required: false
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('scrape', scrapedDataSchema)

