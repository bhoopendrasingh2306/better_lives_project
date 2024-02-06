const mongoose = require('mongoose');
const config = require("../../config/config");

const connect = () => {
    mongoose.connect(config.mongodb_uri)
}

mongoose.connection.on('disconnected', () => {
    console.error('Error while connecting to mongodb Retrying...');
    connect()
});

mongoose.connection.on('error', (error) => {
    console.error(`Error in mongodb connection:${config.mongodb_uri}\n`, error);
});

mongoose.connection.once('open', () => {
    console.log('mongodb connected successfully',);
});
module.exports = {
    connect
}
