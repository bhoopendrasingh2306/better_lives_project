module.exports = {
    port: process.env.PORT || 4000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/better-lives-dev',
    creds: {
        weather: {
            url: 'https://api.openweathermap.org',
            apiKey: '8e68c6b2973c8013b3fd2ed91c42379d',
            version: '2.5'
        }
    }
}