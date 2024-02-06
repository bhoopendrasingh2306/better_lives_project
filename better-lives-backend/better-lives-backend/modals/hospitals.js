const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalsSchema = new Schema({
    key: {
        type: Number,
        required: true
    },
    details: {
        type: Object,
        required: true
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now()
    },
})

module.exports = mongoose.model('hospital', hospitalsSchema)

