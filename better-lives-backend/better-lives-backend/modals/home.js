const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    search: {
        type: Boolean,
        required: true
    },
    explore: {
        type: Boolean,
        required: true
    },
    compare: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('home', homeSchema)

